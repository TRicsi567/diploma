import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginTop: theme.spacing(1),
    flexGrow: 1,
  },
}));

const CardLoadingSkeleton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton variant='rect' height={180} />
      <Skeleton variant='rect' className={classes.text} />
    </div>
  );
};

export { CardLoadingSkeleton as default };
