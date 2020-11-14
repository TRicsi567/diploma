import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [[theme.spacing(2), theme.spacing(3)]],
  },
}));

const TabPanel = (props) => {
  const { children, value, index, className, ...other } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export { TabPanel as default };
