import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grow } from '@material-ui/core';
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

const promiseFn = async () => {
  try {
    const { data } = await directus.getItems('tutorial', {
      status: 'published',
    });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const All = () => {
  const classes = useStyles();

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
            <Grow>
              <TutorialCard
                key={tutorial.id}
                title={tutorial.name}
                description={tutorial.description}
                difficulty={tutorial.difficulty}
                id={tutorial.id}
                onClick={navigateToTutorial(tutorial.id, tutorial.difficulty)}
                iconId={tutorial.icon}
              />
            </Grow>
          ))}
    </div>
  );
};

export { All as default };
