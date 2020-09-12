import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 125,
    boxShadow: '0px -8px 24px -8px rgba(0,0,0,0.2)',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} component='footer'>
      <Typography elevation={24} square>
        alamfa
      </Typography>
    </Paper>
  );
};

export { Footer as default };
