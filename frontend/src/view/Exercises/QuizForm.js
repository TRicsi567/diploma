import React from 'react'
import { Form, useFormikContext } from 'formik'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Quiz from './Quiz'

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
  result: {
    marginTop: theme.spacing(2),
    fontSize: 24,
  },
}))

const QuizForm = ({ quizzes, children }) => {
  const classes = useStyles()
  const { submitCount, isSubmitting, errors, values } = useFormikContext()
  return (
    <Form>
      {Object.entries(quizzes).map(([id, quiz]) => (
        <Quiz
          className={classes.quiz}
          id={id}
          key={id}
          question={quiz.question}
          options={quiz.options}
        />
      ))}
      {children}
      <div className={classes.buttonWrapper}>
        <Button
          type='submit'
          variant='outlined'
          disabled={!!submitCount || isSubmitting}
        >
          Ellenőrzés
        </Button>
        <Button
          type='reset'
          variant='contained'
          disabled={isSubmitting || !submitCount}
        >
          Újra
        </Button>
        {!!submitCount && !isSubmitting && (
          <Typography className={classes.result}>{`Eredmény: ${
            Object.keys(values).length - Object.keys(errors).length
          }/${Object.keys(values).length}`}</Typography>
        )}
      </div>
    </Form>
  )
}

export { QuizForm as default }
