import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ProgressBar = () => {
  const { isSubmitting } = useFormikContext();

  return <LinearProgress hidden={!isSubmitting} />;
};

export { ProgressBar as default };
