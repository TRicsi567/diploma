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
  },
  description: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 6,
    '-webkit-box-orient': 'vertical',
  },
  easy: { border: [[1, 'solid', 'green']] },
  intermediate: {
    border: [[1, 'solid', 'yellow']],
  },
  professional: {
    border: [[1, 'solid', 'red']],
  },
}));

const TutorialCard = React.forwardRef(
  ({ title, description, id, difficulty, onClick }, ref) => {
    console.log(ref);
    const classes = useStylese();
    console.log(difficulty);

    return (
      <Card
        className={clsx(classes.root, classes[difficulty])}
        ref={ref}
        onClick={onClick}>
        <CardActionArea>
          <CardMedia
            image='https://picsum.photos/300/200'
            className={classes.media}
          />
          <CardContent>
            <Typography variant='h6'>{title}</Typography>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
);

TutorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

TutorialCard.defaultProps = {};

export { TutorialCard as default };
