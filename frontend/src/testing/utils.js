import React, { useReducer } from 'react';
import {
  render,
  screen,
  fireEvent,
  within,
  waitForElement,
  waitForDomChange,
  wait,
} from '@testing-library/react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { MemoryRouter } from 'react-router-dom';
import { AppDispatchContext, AppStateContext } from 'view/App/context';
import { reducer } from 'view/App/reducer';
import theme from 'theme';
import testData from './testData.js';

const WrapperComponent = ({
  children,
  initialEntries = ['/'],
  appState = testData,
}) => {
  const [state, dispatch] = useReducer(reducer, appState);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MemoryRouter initialEntries={initialEntries}>
        <AppDispatchContext.Provider value={dispatch}>
          <AppStateContext.Provider value={state}>
            {children}
          </AppStateContext.Provider>
        </AppDispatchContext.Provider>
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (node, { initialEntries, appState, ...options } = {}) =>
  render(node, {
    wrapper: (props) => (
      <WrapperComponent
        {...props}
        initialEntries={initialEntries}
        appState={appState}
      />
    ),
    options,
  });

export * from '@testing-library/react';
export {
  customRender as render,
  screen,
  fireEvent,
  within,
  waitForElement,
  waitForDomChange,
  wait,
};
