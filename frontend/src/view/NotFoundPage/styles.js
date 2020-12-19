import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  '@keyframes glitch-animation': {
    from: {
      textShadow: [
        '#FFF 0px 0px 5px',
        // '#FFF 0px 0px 10px',
        // '#FFF 0px 0px 15px',
        `${theme.palette.colors.blue} 0px 0px 20px`,
        // `${theme.palette.colors.blue} 0px 0px 30px`,
        // `${theme.palette.colors.blue} 0px 0px 40px`,
        // `${theme.palette.colors.blue} 0px 0px 50px`,
        // `${theme.palette.colors.blue} 0px 0px 75px`,
      ],
    },
    to: {
      textShadow: [
        // '#FFF 0px 0px 5px',
        // '#FFF 0px 0px 10px',
        '#FFF 0px 0px 15px',
        `${theme.palette.colors.blue} 0px 0px 20px`,
        `${theme.palette.colors.blue} 0px 0px 30px`,
        `${theme.palette.colors.blue} 0px 0px 40px`,
        `${theme.palette.colors.blue} 0px 0px 50px`,
        // `${theme.palette.colors.blue} 0px 0px 75px`,
      ],
    },
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonWrapper: {
    margin: [[theme.spacing(5), 'auto', 0]],
  },
  title: {
    fontSize: 180,
    animationName: '$glitch-animation',
    animationDuration: '1000ms',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
}));

export { useStyles as default };
