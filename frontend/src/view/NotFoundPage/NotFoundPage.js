import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const NotFoundPage = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Typography align='center' variant='h1' className={classes.title}>
        404
      </Typography>
      <Typography align='center' variant='h4'>
        A keresett oldal nem található
      </Typography>
      <div className={classes.buttonWrapper}>
        <Button
          variant='contained'
          onClick={() => {
            history.replace('/');
          }}
        >
          A főoldalra
        </Button>
      </div>
    </div>
  );
};

export { NotFoundPage as default };
