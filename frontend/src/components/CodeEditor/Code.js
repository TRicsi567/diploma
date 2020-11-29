import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/clike/clike';
import { useField, useFormikContext } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .CodeMirror': {
      fontSize: 14,
    },
  },
}));

const Code = (props) => {
  const { className } = props;
  const classes = useStyles();
  const [, meta] = useField('code');
  const { setFieldValue } = useFormikContext();
  const ref = React.useRef(null);
  const codeMirror = React.useRef(null);

  React.useLayoutEffect(() => {
    codeMirror.current = CodeMirror(
      (editor) => {
        ref.current.parentNode.replaceChild(editor, ref.current);
      },
      {
        mode: CodeMirror.mimeModes['text/x-c++src'],
        lineNumbers: true,
        tabSize: 4,
        theme: 'monokai',
        value: meta.initialValue,
      }
    );
  }, [meta.initialValue]);

  React.useEffect(() => {
    if (codeMirror.current) {
      codeMirror.current.on('change', (instance) => {
        setFieldValue('code', instance.getValue());
      });
    }
  }, [setFieldValue]);

  return (
    <div className={clsx(className, classes.root)}>
      <textarea ref={ref} />
    </div>
  );
};

Code.propTypes = {
  className: PropTypes.string,
  initialValue: PropTypes.string,
};

Code.defaultProps = {
  className: '',
  initialValue: '',
};

export { Code as default };
