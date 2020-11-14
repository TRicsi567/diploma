import React from 'react';
// import PropTypes from 'prop-types';
import { Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import CodeEditor from 'view/components/CodeEditor';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [[theme.spacing(5), theme.spacing(2)]],
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardRoot: {
    width: '100%',
    display: 'flex',
    minHeight: '65vh',
  },
  paper: {
    flexGrow: 1,
    backgroundColor: theme.palette.colors.bg2,
  },
  button: {
    flexShrink: 0,
    flexGrow: 0,
    // borderRadius: theme.spacing(0.5),
    '& svg': {
      fill: theme.palette.colors.fg1,
    },
  },
}));

const Tutorial = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cardRoot}>
        <IconButton className={classes.button}>
          <ChevronLeft fontSize='large' />
        </IconButton>
        <Paper className={classes.paper}>almafa</Paper>
        <IconButton className={classes.button}>
          <ChevronRight fontSize='large' />
        </IconButton>
      </div>
      <CodeEditor className={classes.codeEditor} />
    </div>
  );
};

export { Tutorial as default };
