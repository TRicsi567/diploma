import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import CodeEditor from 'view/components/CodeEditor';
import TutorialContent from 'view/components/TutorialContent';
import { useRouteMatch } from 'react-router-dom';
import directus from 'api/directus';
import { useAsync } from 'react-async';
import { useAppDispatch } from 'state/App/context';
import { setLoading } from 'state/App/actions';
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
      fields: ['id', 'name'],
      filter: {
        url_alias: {
          rlike: url_alias,
        },
      },
    });
    return data;
  };
  const getSlides = async (tutorialId) => {
    const result = {};
    const { data: slides } = await directus.getItems('slide', {
      sort: 'order',
      filter: {
        tutorial_id: {
          eq: tutorialId,
        },
      },
    });

    slides.forEach((slide) => {
      result[slide.id] = [];
    });

    const { data: steps } = await directus.getItems('step', {
      sort: 'id',
      fields: ['content', 'slide_id', 'code'],
      filter: {
        slide_id: {
          in: slides.map((slide) => slide.id).join(','),
        },
      },
    });

    steps.forEach((step) => {
      result[step.slide_id].push({ content: step.content, code: step.code });
    });

    return Object.values(result);
  };

  const tutorial = await getTutorial(url_alias);

  const slides = await getSlides(tutorial.id);
  return { slides, name: tutorial.name };
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
