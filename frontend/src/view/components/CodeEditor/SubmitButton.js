import React from 'react';
import { useFormikContext } from 'formik';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: [[theme.spacing(2), theme.spacing(3)]],
  },
}));

const SubmitButton = () => {
  const classes = useStyles();
  const { isSubmitting, values } = useFormikContext();
  return (
    <Button
      type='submit'
      variant='outlined'
      disabled={isSubmitting || !values.code}
      className={classes.root}>
      fordít
    </Button>
  );
};

export { SubmitButton as default };
