import React from 'react';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  if (value !== index) {
    return null;
  }

  return (
    <div
      role='tabpanel'
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}>
      {children}
    </div>
  );
};

export { TabPanel as default };
