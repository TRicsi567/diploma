import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Footer from 'view/Footer';
import Header from 'view/Header';
import SideDrawer from 'view/SideDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  },
  content: {
    maxWidth: 1280,
    margin: [[0, 'auto']],
  },
}));

const PageSkeleton = ({ children }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({ menuOpen: false });

  return (
    <div className={classes.root}>
      <Header
        onMenuClick={() => {
          setState((prev) => ({ ...prev, menuOpen: true }));
        }}
      />
      <SideDrawer
        open={state.menuOpen}
        onClose={() => {
          setState((prev) => ({ ...prev, menuOpen: false }));
        }}
      />
      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  );
};

export { PageSkeleton as default };
