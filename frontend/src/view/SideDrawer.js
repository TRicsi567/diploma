import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'res/logo.svg';
import { makeStyles } from '@material-ui/styles';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
} from '@material-ui/core';
import { initialState, reducer } from 'state/SideDrawer';
import {
  toggleEasy,
  toggleIntermediate,
  toggleProfessional,
} from 'state/SideDrawer/actions';
import CollapsibleListItem from 'view/CollapsibleListItem';
import { useAsync } from 'react-async';
import { useHistory } from 'react-router-dom';
import directus from 'directus';

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

const promiseFn = async () => {
  const { data } = await directus.getItems('tutorial', {
    status: 'published',
  });
  const result = { easy: [], intermediate: [], professional: [] };

  data.forEach(({ name, difficulty, id }) => {
    result[difficulty].push({ name, id });
  });

  return result;
};

const SideDrawer = ({ open, onClose, onOpen }) => {
  const classes = useStyles();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { data, isLoading } = useAsync({ promiseFn });

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
      switch (difficulty) {
        case 'easy': {
          dispatch(toggleEasy());
          break;
        }
        case 'intermediate': {
          dispatch(toggleIntermediate());
          break;
        }
        case 'professional': {
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
        {isLoading ? (
          <LinearProgress />
        ) : (
          <React.Fragment>
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
                    {data[difficulty].map((tutorial) => (
                      <ListItem
                        button
                        key={tutorial.id}
                        onClick={navigateTo(
                          `/tutorials/${difficulty}/${tutorial.id}`
                        )}>
                        <ListItemText>{tutorial.name}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </CollapsibleListItem>
              );
            })}
          </React.Fragment>
        )}

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
