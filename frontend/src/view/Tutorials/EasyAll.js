import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardLoadingSkeleton from 'view/components/CardLoadingSkeleton';
import TutorialCard from 'view/components/TutorialCard';
import { useAsync } from 'react-async';
import axios from 'api/axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    margin: [[theme.spacing(2), theme.spacing(5)]],
    display: 'grid',
    gridGap: theme.spacing(3),
    // gridAutoRows: `minmax(${400}px, 1fr)`,
    gridAutoRows: 400,
    gridTemplateColumns: `repeat(3, minmax(${300}px, 1fr))`,
  },
  skeleton: {},
}));

const promiseFn = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      '/c++/items/tutorial?status=published&filter[difficulty]=easy'
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const EasyAll = () => {
  const classes = useStyles();

  const { data = [], isLoading } = useAsync({ promiseFn });
  const history = useHistory();

  const navigateToTutorial = React.useCallback((id, difficulty) => (event) => {
    history.push(`/tutorials/${difficulty}/${id}`);
  });

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
              onClick={navigateToTutorial(tutorial.id, tutorial.difficulty)}
            />
          ))}
    </div>
  );
};

export { EasyAll as default };
