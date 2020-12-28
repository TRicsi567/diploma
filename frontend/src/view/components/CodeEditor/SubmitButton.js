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
  const { isSubmitting, values, submitForm } = useFormikContext();
  return (
    <Button
      type='button'
      variant='outlined'
      disabled={isSubmitting || !values.code}
      className={classes.root}
      onClick={submitForm}
    >
      fordít
    </Button>
  );
};

export { SubmitButton as default };
