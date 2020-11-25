import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import TutorialCard from 'view/components/TutorialCard';
import { Grow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'state/App/context';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    margin: [[theme.spacing(2), theme.spacing(5)]],
    display: 'grid',
    gridGap: theme.spacing(3),
    gridAutoRows: '1.5fr',
    gridTemplateColumns: `repeat(auto-fill, minmax(${300}px, 1fr))`,
  },
  skeleton: {},
}));

const CategoryAll = ({ category }) => {
  const classes = useStyles();

  const history = useHistory();

  const { tutorials } = useAppState();

  const navigateToTutorial = React.useCallback(
    (tutorialName, difficulty) => (event) => {
      history.push(`/tutorials/${difficulty}/${tutorialName}`);
    },
    [history]
  );

  return (
    <div className={classes.root}>
      {tutorials[category].map((tutorial) => (
        <Grow key={tutorial.id} in>
          <div>
            <TutorialCard
              title={tutorial.name}
              description={tutorial.description}
              difficulty={tutorial.difficulty}
              onClick={navigateToTutorial(
                tutorial.url_alias || tutorial.id,
                tutorial.difficulty
              )}
              imageSrc={
                tutorial.image &&
                (tutorial.image.thumbnails
                  ? tutorial.image.thumbnails['medium-contain']
                  : tutorial.image.src)
              }
            />
          </div>
        </Grow>
      ))}
    </div>
  );
};

CategoryAll.propTypes = {
  category: PropTypes.oneOf(['easy', 'intermediate', 'professional'])
    .isRequired,
};

CategoryAll.defaultProps = {};

export { CategoryAll as default };
