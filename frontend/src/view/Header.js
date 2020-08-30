import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    fill: 'white',
  },
}));

const Header = ({ onMenuClick }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' onClick={onMenuClick}>
            <MenuIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { Header as default };
