import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import { AppDispatchContext, AppStateContext } from 'view/App/context'
import theme from 'theme'

import testData from './testData.json'

const WrapperComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppDispatchContext.Provider value={jest.fn()}>
        <AppStateContext.Provider value={testData}>
          {children}
        </AppStateContext.Provider>
      </AppDispatchContext.Provider>
    </ThemeProvider>
  )
}

const customRender = (node, options) =>
  render(node, { wrapper: WrapperComponent, ...options })
export { customRender as render }
