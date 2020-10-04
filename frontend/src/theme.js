import { createMuiTheme } from '@material-ui/core';

const colors = {
  yellow: '#e6db74',
  orange: '#fd971f',
  red: '#f92672',
  magenta: '#fd5ff0',
  violet: '#ae81ff',
  blue: '#66d9ef',
  cyan: '#e1efe4',
  green: '#a6e22e',
  bg0: '#272822',
  bg1: '#3e3d32',
  bg2: '#75715e',
  fg0: '#f8f8f2',
  fg1: '#cfcfc2',
};

// link color: #61dafb
const theme = createMuiTheme({
  palette: {
    text: { primary: colors.fg0, secondary: colors.fg1 },
    background: { default: colors.bg1, paper: colors.bg0 },
    primary: { main: colors.fg0 },
    secondary: { main: colors.fg1 },
    error: { main: colors.red },
    warning: { main: colors.orange },
    info: { main: colors.blue },
    success: { main: colors.green },
    colors,
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: colors.fg0,
        backgroundColor: colors.bg0,
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
        },
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: [[1, 'solid', 'white']],
      },
      button: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
        },
      },
    },
    MuiListItemText: {
      primary: {
        textTransform: 'uppercase',
      },
    },
  },
});

export { theme as default, theme, colors };
