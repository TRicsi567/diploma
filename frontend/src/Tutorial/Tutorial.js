import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import CodeEditor from 'components/CodeEditor';
import TutorialContent from 'components/TutorialContent';
import { useRouteMatch } from 'react-router-dom';
import directus from 'api/directus';
import { useAsync } from 'react-async';
import { useAppDispatch } from 'App/context';
import { setLoading } from 'App/actions';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [[theme.spacing(5), theme.spacing(2)]],
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  codeEditor: {
    marginTop: theme.spacing(4),
  },
}));

const promiseFn = async ({ url_alias }) => {
  const getTutorial = async () => {
    const { data } = await directus.getItems('tutorial', {
      single: 1,
      fields: ['id', 'name', 'slides', 'description'],
      filter: {
        url_alias: {
          rlike: url_alias,
        },
      },
    });
    return data;
  };

  const tutorial = await getTutorial(url_alias);

  const slides = tutorial.slides.map(({ slide }) =>
    slide.map(({ text, code }) => ({ text, code }))
  );

  return { ...tutorial, slides };
};

const Tutorial = () => {
  const classes = useStyles();

  const { params } = useRouteMatch();
  const dispatch = useAppDispatch();

  const { isLoading, data = {} } = useAsync({
    promiseFn,
    url_alias: params.id,
  });

  React.useLayoutEffect(() => {
    dispatch(setLoading({ payload: isLoading }));
  }, [isLoading, dispatch]);

  return (
    <div className={classes.root}>
      <Typography variant='h4' align='center' className={classes.title}>
        {isLoading ? <Skeleton /> : data.name}
      </Typography>
      <TutorialContent slides={data.slides} />
      <CodeEditor className={classes.codeEditor} />
    </div>
  );
};

export { Tutorial as default };
