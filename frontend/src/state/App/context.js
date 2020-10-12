import React from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const useAppState = () => {
  const context = React.useContext(AppStateContext);
  return context;
};

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);
  return context;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider as default, useAppDispatch, useAppState };
