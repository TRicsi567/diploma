import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/clike/clike';
import { useField, useFormikContext } from 'formik';
import debounce from 'utils/debounce';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .CodeMirror': {
      fontSize: 14,
    },
  },
}));

const Code = (props) => {
  const { className, name } = props;
  const classes = useStyles();
  const [, meta] = useField(name);
  const { setFieldValue, submitCount } = useFormikContext();
  const ref = React.useRef(null);
  const codeMirror = React.useRef(null);
  const prevSubmitCount = React.useRef(submitCount);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = React.useCallback(
    debounce((value) => {
      setFieldValue(name, value);
    }, 200),
    [name, setFieldValue]
  );

  React.useLayoutEffect(() => {
    (() => {
      if (!ref.current || !ref.current.parentNode) {
        return;
      }
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
    })();
  }, [meta.initialValue]);

  React.useEffect(() => {
    if (codeMirror.current) {
      codeMirror.current.on('change', (instance) => {
        debouncedSetValue(instance.getValue());
      });
    }

    return () => {
      if (debouncedSetValue.clear) {
        debouncedSetValue.clear();
      }
    };
  }, [debouncedSetValue]);

  React.useEffect(() => {
    // form reseted
    if (prevSubmitCount.current !== 0 && submitCount === 0) {
      codeMirror.current.doc.setValue(meta.initialValue);
    }

    prevSubmitCount.current = submitCount;
  }, [submitCount, meta.initialValue]);

  return (
    <div className={clsx(className, classes.root)}>
      <textarea ref={ref} />
    </div>
  );
};

Code.propTypes = {
  className: PropTypes.string,
  initialValue: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Code.defaultProps = {
  className: '',
  initialValue: '',
};

export { Code as default };
