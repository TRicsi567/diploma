import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  easy: {
    backgroundColor: theme.palette.colors.green,
  },
  intermediate: {
    backgroundColor: theme.palette.colors.orange,
  },
  professional: {
    backgroundColor: theme.palette.colors.red,
  },
}));

const ImagePlaceholder = ({ type, ...rest }) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, classes[type])} {...rest} />;
};

ImagePlaceholder.propTypes = {
  type: PropTypes.oneOf(['easy', 'intermediate', 'professional']).isRequired,
};

export { ImagePlaceholder as default };
