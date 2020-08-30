import { createMuiTheme } from '@material-ui/core';

// link color: #61dafb
const theme = createMuiTheme({
  palette: {
    primary: { main: '#0f4c75' },
    secondary: { main: '#3282b8' },
    text: { primary: '#ffffff', secondary: '#bbe1fa' },
    background: { default: '#282c34', paper: '#333' },
    warning: { main: '#e11d74' },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: 'white',
        backgroundColor: '#333',
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

export { theme as default, theme };
