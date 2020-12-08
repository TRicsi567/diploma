import React from 'react';
import {
  Done,
  RadioButtonUnchecked,
  Replay,
  KeyboardBackspace,
  Assignment,
} from '@material-ui/icons';
import { makeStyles, Typography, Zoom, Button, Paper } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
  },
  outline: {
    height: 200,
    width: 'auto',
  },
  checkmark: {
    position: 'absolute',
    height: 100,
    width: 'auto',
    top: `calc(200px / 2 - 100px / 2)`,
    left: `calc(200px / 2 - 100px / 2)`,
  },
  icon: { marginRight: theme.spacing(1) },
  buttonWrapper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
    '& button:first-child': {
      marginRight: theme.spacing(1),
    },
  },
}));

const DoneView = ({ onRestart, onExercise }) => {
  const classes = useStyles();
  const { params } = useRouteMatch();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Zoom in>
        <div className={classes.wrapper}>
          <RadioButtonUnchecked className={classes.outline} />
          <Done className={classes.checkmark} />
          <Typography variant='h3' align='center'>
            Végeztél
          </Typography>
        </div>
      </Zoom>

      <Zoom in>
        <Paper className={classes.buttonWrapper}>
          <Button onClick={onRestart}>
            <Replay className={classes.icon} />
            Újrakezdés
          </Button>
          <Button onClick={onExercise}>
            <Assignment className={classes.icon} />A feladatokhoz
          </Button>
          <Button
            onClick={() => {
              history.push(`/tutorials/${params.difficulty}`);
            }}>
            <KeyboardBackspace className={classes.icon} />
            Vissza a többihez
          </Button>
        </Paper>
      </Zoom>
    </div>
  );
};

export { DoneView as default };
