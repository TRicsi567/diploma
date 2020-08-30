import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'res/logo.svg';
import { makeStyles } from '@material-ui/styles';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { initialState, reducer, actions } from 'state/SideDrawer';
import CollapsibleListItem from 'view/CollapsibleListItem';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
    height: 100,
    margin: theme.spacing(1),
    boxSizing: 'border-box',
    flexShrink: 0,
  },
  paper: {
    minWidth: 300,
    alignItems: 'center',
    '& $menuTitle': {
      marginTop: 0,
    },
    '& $menuTitle ~ $menuTitle': {
      marginTop: theme.spacing(3),
    },
  },
  menuList: {
    width: '80%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  menuTitle: {},
}));

const SideDrawer = ({ open, onClose }) => {
  const classes = useStyles();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <SwipeableDrawer
      classes={{ paper: classes.paper }}
      anchor='left'
      open={open}
      onClose={onClose}
    >
      <Logo className={classes.logo} />
      <List className={classes.menuList}>
        <ListItem divider className={classes.menuTitle}>
          <ListItemText>útmutatók</ListItemText>
        </ListItem>
        <CollapsibleListItem
          title='kezdő'
          onClick={() => {
            dispatch({ type: actions.TOGGLE_EASY_OPEN });
          }}
          open={state.levelEasyOpen}
        >
          <List disablePadding>
            <ListItem button>
              <ListItemText>tutorial 1</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>tutorial 2</ListItemText>
            </ListItem>
          </List>
        </CollapsibleListItem>
        <CollapsibleListItem
          title='haladó'
          onClick={() => {
            dispatch({ type: actions.TOGGLE_INTERMEDIATE_OPEN });
          }}
          open={state.levelIntermediateOpen}
        >
          <List disablePadding>
            <ListItem button>
              <ListItemText>tutorial 1</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>tutorial 2</ListItemText>
            </ListItem>
          </List>
        </CollapsibleListItem>
        <CollapsibleListItem
          title='nehéz'
          onClick={() => {
            dispatch({ type: actions.TOGGLE_HARD_OPEN });
          }}
          open={state.levelHardOpen}
        >
          <List disablePadding>
            <ListItem button>
              <ListItemText>tutorial 1</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>tutorial 2</ListItemText>
            </ListItem>
          </List>
        </CollapsibleListItem>

        <ListItem divider className={classes.menuTitle}>
          <ListItemText>hasznos linkek</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Online fordító</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { SideDrawer as default };
