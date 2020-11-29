import React from 'react';
import { Tab, Tabs } from '@material-ui/core';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}>
      {children}
    </div>
  );
};

const tabValues = {
  TUTORIAL: 'TUTORIAL',
  EXERCISE: 'EXERCISE',
};

const SelectorPage = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(tabValues.TUTORIAL);

  return (
    <div>
      <Tabs
        value={activeTab}
        centered
        onChange={(event, newValue) => {
          setActiveTab(newValue);
        }}>
        <Tab value={tabValues.TUTORIAL} label='Leckék'></Tab>
        <Tab value={tabValues.EXERCISE} label='Feladatok'></Tab>
      </Tabs>
      <TabPanel index={tabValues.TUTORIAL} value={activeTab}>
        tutorials
      </TabPanel>
      <TabPanel index={tabValues.EXERCISE} value={activeTab}>
        exercise
      </TabPanel>
    </div>
  );
};

export { SelectorPage as default };
