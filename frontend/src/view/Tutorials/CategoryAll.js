import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import CardLoadingSkeleton from 'view/components/CardLoadingSkeleton';
import TutorialCard from 'view/components/TutorialCard';
import { useAsync } from 'react-async';
import { useHistory } from 'react-router-dom';
import directus from 'directus';

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

  const promiseFn = React.useCallback(async () => {
    try {
      const { data } = await directus.getItems('tutorial', {
        status: 'published',

        filter: {
          difficulty: {
            eq: category,
          },
        },
        meta: '*',
      });
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }, [category]);

  const { data = [], isLoading } = useAsync({ promiseFn });
  const history = useHistory();

  const navigateToTutorial = React.useCallback(
    (id, difficulty) => (event) => {
      history.push(`/tutorials/${difficulty}/${id}`);
    },
    [history]
  );

  return (
    <div className={classes.root}>
      {isLoading
        ? (() => {
            const skeletons = [];
            for (let i = 0; i < 3; i += 1) {
              skeletons.push(<CardLoadingSkeleton key={i} />);
            }
            return skeletons;
          })()
        : data.map((tutorial) => (
            <TutorialCard
              key={tutorial.id}
              title={tutorial.name}
              description={tutorial.description}
              difficulty={tutorial.difficulty}
              id={tutorial.id}
              iconId={tutorial.icon}
              onClick={navigateToTutorial(tutorial.id, tutorial.difficulty)}
            />
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
