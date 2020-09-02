import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from 'view/HomePage';
import PageSkeleton from 'view/PageSkeleton';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <PageSkeleton>
            <Switch>
              <Route path='/' exact>
                <HomePage />
              </Route>
              <Route path='/tutorials'>tutorials</Route>
              <Route path='*'>404</Route>
            </Switch>
          </PageSkeleton>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
