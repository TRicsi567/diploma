import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grow, Tabs, Tab } from '@material-ui/core';
import TutorialCard from 'components/TutorialCard';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'App/context';
import TabPanel from 'components/TabPanel';

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

const tabValues = {
  TUTORIAL: 'TUTORIAL',
  EXERCISE: 'EXERCISE',
};

const All = () => {
  const classes = useStyles();
  const history = useHistory();
  const { tutorials } = useAppState();
  const [activeTab, setActiveTab] = React.useState(tabValues.TUTORIAL);

  const navigateToTutorial = React.useCallback(
    (tutorialName, difficulty) => (event) => {
      history.push(`/tutorials/${difficulty}/${tutorialName}`);
    },
    [history]
  );

  return (
    <React.Fragment>
      <Tabs
        value={activeTab}
        centered
        onChange={(event, newValue) => {
          setActiveTab(newValue);
        }}>
        <Tab value={tabValues.TUTORIAL} label='Leckék'></Tab>
        <Tab value={tabValues.EXERCISE} label='Feladatok'></Tab>
      </Tabs>
      <TabPanel
        index={tabValues.TUTORIAL}
        value={activeTab}
        className={classes.root}>
        {Object.values(tutorials)
          .flat()
          .map((tutorial) => (
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
      </TabPanel>
      <TabPanel
        value={activeTab}
        index={tabValues.EXERCISE}
        className={classes.root}>
        almafa
      </TabPanel>
    </React.Fragment>
  );
};

export { All as default };
