import React from 'react';
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
import ImagePlaceholder from './ImagePlaceholder';
import useStyles from './styles';

const TutorialCard = React.forwardRef(function TutorialCard(props, ref) {
  const { title, description, difficulty, onClick, imageSrc } = props;
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, classes[difficulty])}
      ref={ref}
      onClick={onClick}
      data-testid='tutorial-card'
    >
      <CardActionArea>
        <CardMedia className={classes.media}>
          {imageSrc ? (
            <img src={imageSrc} alt='tutorial-illustration' />
          ) : (
            <ImagePlaceholder type={difficulty} data-testid='img-placeholder' />
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
  difficulty: PropTypes.oneOf(['easy', 'intermediate', 'professional'])
    .isRequired,
  imageSrc: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

TutorialCard.defaultProps = {
  imageSrc: null,
};

export { TutorialCard as default };
