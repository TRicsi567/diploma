import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Tab, Tabs } from '@material-ui/core';
import {
  Code as CodeIcon,
  Description,
  FormatListBulleted,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Formik, Form } from 'formik';
import axios from 'axios';
import clsx from 'clsx';
import TabPanel from './TabPanel';
import ArgumentList from './ArgumentList';
import Code from './Code';
import Output from './Output';
import SubmitButton from './SubmitButton';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  tabPanel: {
    flexGrow: 1,
    overflow: 'auto',
  },
  output: {
    backgroundColor: 'black',
    padding: theme.spacing(2),
  },
}));

const defaultCode = `#include <iostream>

int main(int argc, const char* argv[])
{
    std::cout << "Hello World" << std::endl;
    return 0;
}
`;

const CodeEditor = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState('code');
  const classes = useStyles();

  const handleTabChange = (event, value) => {
    setActiveTab(value);
  };

  const handleSubmission = async (values, actions) => {
    try {
      const args = Object.values(values.args).join(' ');
      const { data } = await axios.post('http://localhost:8089/api/compile', {
        code: values.code,
        args,
      });

      actions.setValues({ ...values, output: data.stdout || data.stderr });
      setActiveTab('output');
    } catch (err) {}
  };

  return (
    <Paper className={clsx(classes.root, className)}>
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label='Code' icon={<CodeIcon />} value='code' />
        <Tab
          label='Arguments'
          icon={<FormatListBulleted />}
          value='arguments'
        />
        <Tab label='Output' icon={<Description />} value='output' />
      </Tabs>
      <Formik
        initialValues={{
          code: defaultCode,
          args: {},
          output: '',
        }}
        onSubmit={handleSubmission}>
        <Form className={classes.form}>
          <TabPanel index={activeTab} value='code' className={classes.tabPanel}>
            <Code />
          </TabPanel>
          <TabPanel
            index={activeTab}
            value='arguments'
            className={classes.tabPanel}>
            <ArgumentList />
          </TabPanel>
          <TabPanel
            index={activeTab}
            value='output'
            className={clsx(classes.tabPanel, classes.output)}>
            <Output />
          </TabPanel>
          <ProgressBar />
          <SubmitButton />
        </Form>
      </Formik>
    </Paper>
  );
};

CodeEditor.propTypes = {
  className: PropTypes.string,
};

export { CodeEditor as default };
