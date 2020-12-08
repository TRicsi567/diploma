import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from 'view/HomePage'
import PageSkeleton from 'view/PageSkeleton'
import Tutorials from 'view/Tutorials'
import AppProvider from './context'
import theme from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppProvider>
          <BrowserRouter>
            <PageSkeleton>
              <Switch>
                <Route path='/' exact>
                  <HomePage />
                </Route>
                <Route path='/tutorials'>
                  <Tutorials />
                </Route>
                <Route path='*'>404</Route>
              </Switch>
            </PageSkeleton>
          </BrowserRouter>
        </AppProvider>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
