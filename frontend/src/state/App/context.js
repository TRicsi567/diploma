import React from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';

const AppContext = React.createContext();

const useAppContext = () => {
  const context = React.useContext(AppContext);
  return context;
};

const AppProvider = ({ children }) => {
  const value = React.useReducer(reducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider as default, useAppContext };
