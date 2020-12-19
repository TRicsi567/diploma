import React from 'react';
import PropTypes from 'prop-types';
import TutorialCard from 'view/components/TutorialCard';
import { Grow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'view/App/context';
import { useStylesCategory } from './styles';

const CategoryAll = ({ category }) => {
  const classes = useStylesCategory();
  const { tutorials } = useAppState();
  const history = useHistory();

  const navigateToTutorial = React.useCallback(
    (tutorialName, difficulty) => (event) => {
      history.push(`/tutorials/${difficulty}/${tutorialName}`);
    },
    [history]
  );

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {tutorials[category].map((tutorial) => (
          <Grow key={tutorial.id} in>
            <div>
              <TutorialCard
                title={tutorial.name}
                description={tutorial.description}
                difficulty={tutorial.difficulty}
                onClick={navigateToTutorial(
                  tutorial.url_alias,
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
    </div>
  );
};

CategoryAll.propTypes = {
  category: PropTypes.oneOf(['easy', 'intermediate', 'professional'])
    .isRequired,
};

CategoryAll.defaultProps = {};

export { CategoryAll as default };
