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
import { initialState, reducer, actions } from 'state/SideDrawer';
import CollapsibleListItem from 'view/CollapsibleListItem';
import { useAsync } from 'react-async';
import axios from 'api/axios';
import { useHistory } from 'react-router-dom';

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
  const { data } = await axios.get('/c++/items/tutorial');

  const result = { easy: [], intermediate: [], professional: [] };

  data.data.forEach(({ name, difficulty, id }) => {
    result[difficulty].push({ name, id });
  });
  return result;
};

const SideDrawer = ({ open, onClose }) => {
  const classes = useStyles();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { data, isLoading } = useAsync({ promiseFn });

  const tutorailGroupTitles = React.useMemo(
    () => ({
      easy: 'kezdő',
      intermediate: 'haladó',
      professional: 'nehéz',
    }),
    []
  );

  const history = useHistory();

  const navigateToTutorial = React.useCallback(
    (id, difficulty) => () => {
      history.push(`/tutorials/${difficulty}/${id}`);
      onClose();
    },
    [history, onClose]
  );

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
        {isLoading ? (
          <LinearProgress />
        ) : (
          <React.Fragment>
            <CollapsibleListItem
              title={tutorailGroupTitles.easy}
              onClick={() => {
                dispatch({ type: actions.TOGGLE_EASY_OPEN });
              }}
              open={state.levelEasyOpen}
            >
              <List disablePadding>
                {data.easy.map((tutorial) => (
                  <ListItem
                    button
                    key={tutorial.id}
                    onClick={navigateToTutorial(tutorial.id, 'easy')}
                  >
                    <ListItemText>{tutorial.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </CollapsibleListItem>
            <CollapsibleListItem
              title={tutorailGroupTitles.intermediate}
              onClick={() => {
                dispatch({ type: actions.TOGGLE_INTERMEDIATE_OPEN });
              }}
              open={state.levelIntermediateOpen}
            >
              <List disablePadding>
                {data.intermediate.map((tutorial) => (
                  <ListItem
                    button
                    key={tutorial.id}
                    onClick={navigateToTutorial(tutorial.id, 'intermediate')}
                  >
                    <ListItemText>{tutorial.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </CollapsibleListItem>
            <CollapsibleListItem
              title={tutorailGroupTitles.professional}
              onClick={() => {
                dispatch({ type: actions.TOGGLE_HARD_OPEN });
              }}
              open={state.levelHardOpen}
            >
              <List disablePadding>
                {data.professional.map((tutorial) => (
                  <ListItem
                    button
                    key={tutorial.id}
                    onClick={navigateToTutorial(tutorial.id, 'professional')}
                  >
                    <ListItemText>{tutorial.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </CollapsibleListItem>
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
};

export { SideDrawer as default };
