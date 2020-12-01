import React from 'react';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Quiz from './Quiz';

const useStyles = makeStyles((theme) => ({
  quiz: {
    marginTop: 0,
    '& ~ $quiz': {
      marginTop: theme.spacing(3),
    },
  },
  buttonWrapper: {
    marginTop: theme.spacing(4),
    '& button:first-child': {
      marginRight: theme.spacing(3),
    },
  },
}));

const QuizForm = ({ quizzes, children }) => {
  const classes = useStyles();
  const { submitCount, isSubmitting } = useFormikContext();
  return (
    <Form>
      {quizzes.map((quiz) => (
        <Quiz
          className={classes.quiz}
          key={quiz.question}
          question={quiz.question}
          options={quiz.options}
        />
      ))}
      {children}
      <div className={classes.buttonWrapper}>
        <Button
          type='submit'
          variant='outlined'
          disabled={submitCount || isSubmitting}>
          Ellenörzés
        </Button>
        <Button
          type='reset'
          variant='contained'
          disabled={isSubmitting || !submitCount}>
          Újra
        </Button>
      </div>
    </Form>
  );
};

export { QuizForm as default };
