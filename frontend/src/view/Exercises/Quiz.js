import {
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Check, Clear } from '@material-ui/icons';
import clsx from 'clsx';
import { useField, useFormikContext } from 'formik';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    position: 'relative',
  },
  title: {
    borderBottom: [[1, 'solid', theme.palette.colors.fg0]],
    marginBottom: theme.spacing(2),
    fontSize: 16,
    whiteSpace: 'pre-wrap',
    paddingBottom: theme.spacing(0.5),
  },
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: [[0, theme.spacing(2)]],
  },
  labelRoot: {
    justifyContent: 'space-between',
    flexGrow: 1,
    marginLeft: 0,
  },
  labelLabel: {
    fontSize: 24,
  },
  labelPlacementStart: {
    marginRight: 0,
  },
  error: {
    position: 'absolute',
    right: 34,
    top: 24,
    color: theme.palette.colors.red,
  },
  correct: {
    position: 'absolute',
    right: 34,
    top: 24,
    color: theme.palette.colors.green,
  },
}));

const Quiz = ({ id, question, options, className }) => {
  const classes = useStyles();
  const [field, meta, helpers] = useField(id);
  const { isSubmitting, submitCount } = useFormikContext();

  const icon = React.useMemo(() => {
    if (meta.error) {
      return <Clear className={classes.error} />;
    }
    return <Check className={classes.correct} />;
  }, [meta.error, classes.correct, classes.error]);

  const handleChange = (option) => () => {
    if (field.value.includes(option)) {
      helpers.setValue(field.value.filter((element) => element !== option));
      return;
    }
    helpers.setValue([...field.value, option], false);
  };

  return (
    <Paper className={clsx(classes.root, className)}>
      <React.Fragment>
        {isSubmitting || !submitCount || icon}
        <Typography className={classes.title}>{question}</Typography>
        {Object.keys(options).map((text) => (
          <div className={classes.option} key={text}>
            <FormControlLabel
              labelPlacement='start'
              label={text}
              disabled={isSubmitting || !!submitCount}
              classes={{
                root: classes.labelRoot,
                label: classes.labelLabel,
                labelPlacementStart: classes.labelPlacementStart,
              }}
              control={
                <Checkbox
                  checked={field.value.includes(text)}
                  onChange={handleChange(text)}
                />
              }
            />
          </div>
        ))}
      </React.Fragment>
    </Paper>
  );
};

export { Quiz as default };
