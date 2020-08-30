import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  nestedWrapper: {
    marginLeft: 'auto',
    width: '95%',
    borderLeft: [[1, 'solid', 'white']],
  },
}));

const CollapsibleListItem = ({ open, children, title, onClick }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem onClick={onClick} button>
        <ListItemText>{title}</ListItemText>
      </ListItem>
      <Collapse
        in={open}
        timeout='auto'
        unmountOnExit
        className={classes.nestedWrapper}
      >
        {children}
      </Collapse>
    </React.Fragment>
  );
};

CollapsibleListItem.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
};

export { CollapsibleListItem as default };
