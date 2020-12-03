import React from 'react';
import { makeStyles, Typography, fade } from '@material-ui/core';
import { Code } from 'components/CodeEditor';
import clsx from 'clsx';
import { useFormikContext } from 'formik';
import { Check, Clear } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  title: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(0.5),
    borderBottom: [['solid', 1, theme.palette.colors.fg0]],
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: fade(theme.palette.colors.fg1, 0.1),
    marginBottom: theme.spacing(2),
    borderLeft: [['solid', 4, theme.palette.colors.blue]],
    paddingLeft: theme.spacing(2),
    minHeight: 100,
    marginTop: theme.spacing(2),
  },
  question: { marginTop: theme.spacing(2) },
  code: { marginTop: theme.spacing(2) },
  error: {
    position: 'absolute',
    right: 16,
    top: 4,
    color: theme.palette.colors.red,
  },
  correct: {
    position: 'absolute',
    right: 16,
    top: 4,
    color: theme.palette.colors.green,
  },
}));

const ProgrammingTask = ({ question, description, className }) => {
  const classes = useStyles();
  const { errors, submitCount, isSubmitting } = useFormikContext();

  const icon = React.useMemo(() => {
    if (errors.code) {
      return <Clear fontSize='large' className={classes.error} />;
    }
    return <Check fontSize='large' className={classes.correct} />;
  }, [errors.code, classes.correct, classes.error]);

  return (
    <div className={clsx(className, classes.root)}>
      {isSubmitting || !submitCount || icon}

      <Typography className={classes.title} variant='h4'>
        Programozási feladat
      </Typography>
      <Typography variant='h5' className={classes.question}>
        {question}
      </Typography>
      {description && (
        <div className={classes.description}>
          <Typography variant='h6'>{description}</Typography>
        </div>
      )}
      <Code name='code' className={classes.code} />
    </div>
  );
};

export { ProgrammingTask as default };
