import React from 'react';
import { Paper, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Email, Phone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 125,
    boxShadow: '0px -8px 24px -8px rgba(0,0,0,0.2)',
    padding: [[20, 80]],
  },
  link: {
    display: 'inline-flex',
    cursor: 'pointer',
    '& svg': {
      marginRight: theme.spacing(1),
    },
  },
  contactWrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    '& $link': {
      marginTop: 0,
    },
    '& $link ~ $link': {
      marginTop: theme.spacing(1),
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper elevation={24} square className={classes.root} component='footer'>
      <div className={classes.contactWrapper}>
        <Typography gutterBottom>Contact me:</Typography>
        <Link
          className={classes.link}
          color='textPrimary'
          href='mailto:email@example.com'>
          <Email />
          <Typography component='span'>email@example.com</Typography>
        </Link>
        <Link
          className={classes.link}
          color='textPrimary'
          href='tel:+36301111222'>
          <Phone />
          <Typography component='span'>+36 30 11 11 222</Typography>
        </Link>
      </div>
    </Paper>
  );
};

export { Footer as default };
