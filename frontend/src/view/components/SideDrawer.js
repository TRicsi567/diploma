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
import { initialState, reducer } from 'state/SideDrawer';
import {
  toggleEasy,
  toggleIntermediate,
  toggleProfessional,
} from 'state/SideDrawer/actions';
import CollapsibleListItem from 'view/components/CollapsibleListItem';
import { useHistory } from 'react-router-dom';
import { difficultyLevels } from 'enums';
import { useAppState } from 'state/App/context';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
    height: 100,
    margin: theme.spacing(1),
    boxSizing: 'border-box',
    flexShrink: 0,
    cursor: 'pointer',
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

const SideDrawer = ({ open, onClose, onOpen }) => {
  const classes = useStyles();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { tutorials } = useAppState();

  const history = useHistory();

  const navigateTo = React.useCallback(
    (location) => (clickEvent) => {
      history.push(location);
      onClose();
    },
    [history, onClose]
  );

  const handleMenuItemClick = React.useCallback(
    (difficulty) => () => {
      const { EASY, INTERMEDIATE, PROFESSIONAL } = difficultyLevels;
      switch (difficulty) {
        case EASY: {
          dispatch(toggleEasy());
          break;
        }
        case INTERMEDIATE: {
          dispatch(toggleIntermediate());
          break;
        }
        case PROFESSIONAL: {
          dispatch(toggleProfessional());
          break;
        }
        default:
      }
    },
    []
  );

  return (
    <SwipeableDrawer
      classes={{ paper: classes.paper }}
      anchor='left'
      open={open}
      onClose={onClose}
      onOpen={onOpen}>
      <Logo className={classes.logo} onClick={navigateTo('/')} />
      <List className={classes.menuList}>
        <ListItem divider className={classes.menuTitle}>
          <ListItemText>útmutatók</ListItemText>
        </ListItem>
        <ListItem button onClick={navigateTo('/tutorials')}>
          <ListItemText>összes</ListItemText>
        </ListItem>

        {Object.entries(state).map(([difficulty, value]) => {
          return (
            <CollapsibleListItem
              key={difficulty}
              title={value.label}
              onClick={handleMenuItemClick(difficulty)}
              open={value.open}>
              <List disablePadding>
                <ListItem
                  button
                  onClick={navigateTo(`/tutorials/${difficulty}`)}>
                  <ListItemText>összes</ListItemText>
                </ListItem>
                {tutorials[difficulty].map((tutorial) => (
                  <ListItem
                    button
                    key={tutorial.id}
                    onClick={navigateTo(
                      `/tutorials/${difficulty}/${
                        tutorial.url_alias || tutorial.id
                      }`
                    )}>
                    <ListItemText>{tutorial.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </CollapsibleListItem>
          );
        })}

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
  onOpen: PropTypes.func.isRequired,
};

export { SideDrawer as default };
