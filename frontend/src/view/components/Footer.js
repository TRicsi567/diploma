import React from 'react'
import { Paper, Typography, Link } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/styles'
import { Email, Phone } from '@material-ui/icons'
import { useAppState } from 'view/App/context'

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
    '& span': {
      minWidth: 100,
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
  title: { textTransform: 'uppercase' },
}))

const Footer = () => {
  const classes = useStyles()
  const { loading, contact } = useAppState()
  return (
    <Paper elevation={24} square className={classes.root} component='footer'>
      <div className={classes.contactWrapper}>
        <Typography gutterBottom className={classes.title}>
          Kontakt:
        </Typography>
        <Link
          className={classes.link}
          color='textPrimary'
          href={`mailto:${contact.email}`}
        >
          <Email />
          <Typography component='span'>
            {loading ? <Skeleton /> : contact.email}
          </Typography>
        </Link>
        <Link
          className={classes.link}
          color='textPrimary'
          href={`mailto:${contact.phone}`}
        >
          <Phone />
          <Typography component='span'>
            {loading ? <Skeleton /> : contact.phone}
          </Typography>
        </Link>
      </div>
    </Paper>
  )
}

export { Footer as default }
