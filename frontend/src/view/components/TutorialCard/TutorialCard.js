import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import DotIcon from '@material-ui/icons/FiberManualRecord';
import directus from 'directus';
import ImagePlaceholder from './ImagePlaceholder';

const useStylese = makeStyles((theme) => ({
  root: {
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

const TutorialCard = React.forwardRef(function TutorialCard(props, ref) {
  const { title, description, id, difficulty, onClick, iconId } = props;
  const classes = useStylese();
  const [iconURL, setIconUrl] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      if (iconId) {
        try {
          console.log('????');
          const { data } = await directus.getFile(`${iconId}`);
          console.log(data);
          const src = data.data.thumbnails.find(
            (thumbnail) => thumbnail.key === 'directus-medium-contain'
          ).url;
          setIconUrl(src);
        } catch (error) {
          setIconUrl(null);
        }
      }
    })();
  }, [iconId]);

  return (
    <Card
      className={clsx(classes.root, classes[difficulty])}
      ref={ref}
      onClick={onClick}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          {iconURL ? (
            <img src={iconURL} alt='' />
          ) : (
            <ImagePlaceholder type={difficulty} />
          )}
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <div className={classes.titleWrapper}>
            <Typography variant='h6'>{title}</Typography>
            <DotIcon className={classes.icon} color='action' />
          </div>
          <Typography className={classes.description}>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

TutorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  difficulty: PropTypes.oneOf(['easy', 'intermediate', 'professional'])
    .isRequired,
  iconId: PropTypes.number,
};

TutorialCard.defaultProps = {
  iconId: null,
};

export { TutorialCard as default };
