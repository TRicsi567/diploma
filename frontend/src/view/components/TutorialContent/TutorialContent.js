import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DoneView from './DoneView';
import ProgressView from './ProgressView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.colors.bg2,
    display: 'flex',
    overflow: 'hidden',
    height: '70vh',
  },
}));

const TutorialContent = ({ slides, className, switchToExercises }) => {
  const classes = useStyles();

  const [done, setDone] = React.useState(false);
  const [state, setState] = React.useState({ slide: 0, step: 0, progress: 0 });

  return (
    <Paper className={classes.root} data-testid='tutorial-content'>
      {done ? (
        <DoneView
          onExercise={switchToExercises}
          onRestart={() => {
            setDone(false);
            setState({ slide: 0, step: 0, progress: 0 });
          }}
        />
      ) : (
        <ProgressView
          slides={slides}
          setDone={setDone}
          setState={setState}
          state={state}
        />
      )}
    </Paper>
  );
};

export { TutorialContent as default };
