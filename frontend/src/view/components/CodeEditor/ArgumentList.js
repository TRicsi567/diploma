import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  OutlinedInput,
  Button,
  IconButton,
  Grow,
} from '@material-ui/core';
import { AddBox, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { useField } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '65%',
    margin: [[0, 'auto']],
  },
  addButton: {
    marginLeft: theme.spacing(2),
  },
  addButtonText: {
    marginRight: theme.spacing(1),
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  },
  argument: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    margin: [[0, theme.spacing(2)]],
  },
  order: {
    marginRight: theme.spacing(1),
    fontSize: 24,
  },
}));

const ArgumentList = (props) => {
  const { className } = props;
  const classes = useStyles();

  const [field, , helpers] = useField('args');

  return (
    <div className={clsx(className, classes.root)}>
      <div className={classes.header}>
        <Button
          className={classes.addButton}
          onClick={() => {
            helpers.setValue({ ...field.value, [Date.now()]: '' });
          }}
        >
          <React.Fragment>
            <Typography component='span' className={classes.addButtonText}>
              Hozzáadás
            </Typography>
            <AddBox fontSize='large' color='primary' />
          </React.Fragment>
        </Button>
      </div>
      <div className={classes.content}>
        {Object.entries(field.value).map(([key, value], index) => (
          <Grow in key={key}>
            <div className={classes.argument}>
              <OutlinedInput
                placeholder={`${index + 1}. argumentum`}
                value={value}
                fullWidth
                onChange={(event) => {
                  const newValue = event.target.value;
                  const nextState = { ...field.value, [key]: newValue };
                  helpers.setValue(nextState);
                }}
              />
              <IconButton
                className={classes.removeButton}
                onClick={() => {
                  const nextState = { ...field.value };
                  delete nextState[key];
                  helpers.setValue(nextState);
                }}
              >
                <Delete color='primary' fontSize='large' />
              </IconButton>
            </div>
          </Grow>
        ))}
      </div>
    </div>
  );
};

ArgumentList.propTypes = {
  className: PropTypes.string,
};

ArgumentList.defaultProps = {
  className: undefined,
};

export { ArgumentList as default };
