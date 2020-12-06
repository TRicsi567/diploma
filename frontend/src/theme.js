import { createMuiTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

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
    MuiCssBaseline: {
      '@global': {
        a: {
          color: colors.violet,
          '&:active': {
            color: colors.violet,
          },
          '&:visited': {
            color: colors.blue,
          },
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        color: colors.fg0,
        backgroundColor: colors.bg0,
      },
    },
    MuiTabs: {
      root: {
        flexShrink: 0,
      },
    },
    MuiIconButton: {
      disabled: {},
      root: {
        borderRadius: 4,
        padding: 4,
        transition: [['background-color', '300ms', 'ease-out']],
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
        },
        '&$disabled': {
          backgroundColor: fade(colors.yellow, 0.1),
        },
      },
    },
    MuiButton: {
      outlined: {
        border: [[2, 'solid', fade(colors.magenta, 0.2)]],
        '&$disabled': {
          color: colors.fg1,
          border: [[1, 'solid', fade(colors.cyan, 0.1)]],
          backgroundColor: fade(colors.cyan, 0.3),
        },
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: colors.fg0,
      },
    },
    MuiFormControlLabel: {
      disabled: {},
      label: {
        '&$disabled': {
          color: colors.fg1,
        },
      },
    },
    MuiCheckbox: {
      disabled: {},
      colorSecondary: {
        '&$disabled': {
          color: colors.fg1,
          margin: 4,
          padding: 5,
          backgroundColor: fade(colors.fg0, 0.1),
        },
      },
      root: {
        '&$disabled': {
          backgroundColor: 'transparent',
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
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: colors.blue,
      },
      barColorSecondary: {
        backgroundColor: colors.red,
      },
    },
  },
});

export { theme as default, theme, colors };
