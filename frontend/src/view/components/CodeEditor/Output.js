import React from 'react';
import { useField } from 'formik';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'pre-line',
    color: theme.palette.colors.fg0,
    margin: 0,
  },
}));

const Output = () => {
  const classes = useStyles();
  const [field] = useField('output');
  return <pre className={classes.root}>{field.value}</pre>;
};

export { Output as default };
