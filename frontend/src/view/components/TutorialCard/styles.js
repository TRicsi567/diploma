import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    '& .MuiCardActionArea-root': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100%',
    },
  },
  media: {
    height: 180,
    width: '100%',
    flexShrink: 0,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      objectFit: 'contain',
    },
  },
  description: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 6,
    '-webkit-box-orient': 'vertical',
  },
  easy: {
    '& $icon': {
      fill: theme.palette.colors.green,
    },
  },
  intermediate: {
    '& $icon': {
      fill: theme.palette.colors.orange,
    },
  },
  professional: {
    '& $icon': {
      fill: theme.palette.colors.red,
    },
  },
  icon: {
    flexShrink: 0,
    marginLeft: theme.spacing(1),
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& > h6': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  },
  cardContent: {
    width: '100%',
  },
}));

export default useStyles;
