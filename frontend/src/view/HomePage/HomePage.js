import React from 'react';
import { useAppState } from 'state/App/context';
import { makeStyles } from '@material-ui/core';
import htmlParser from 'html-react-parser';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [[theme.spacing(2), theme.spacing(5)]],
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const { homePage } = useAppState();
  console.log(homePage);
  return (
    <Grow in>
      <div className={classes.root}>{htmlParser(homePage)}</div>
    </Grow>
  );
};

export { HomePage as default };
