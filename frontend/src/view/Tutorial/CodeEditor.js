import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/clike/clike';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .CodeMirror': {
      width: `calc( 100% - (2 * 55px) )`,
      margin: [[0, 'auto']],
      fontSize: 14,
    },
  },
}));

const CodeEditor = (props) => {
  const { className, initialValue } = props;
  const classes = useStyles();

  const ref = React.useRef(null);

  const [state, setState] = React.useState(initialValue);
  const [args, setArgs] = React.useState('');

  React.useLayoutEffect(() => {
    const codeMirror = CodeMirror.fromTextArea(ref.current, {
      mode: CodeMirror.mimeModes['text/x-c++src'],
      lineNumbers: true,
      tabSize: 4,
      theme: 'monokai',
      value: initialValue,
    });

    codeMirror.on('change', (instance) => {
      setState(instance.getValue());
    });
  }, [initialValue]);

  return (
    <div className={clsx(className, classes.root)}>
      <textarea id='code-editor-placeholder' ref={ref} />
      <input
        type='text'
        value={args}
        onChange={(event) => {
          setArgs(event.target.value);
        }}
      />
      <Button
        variant='outlined'
        type='button'
        onClick={() => {
          axios.post('http://localhost:8089/api/compile', {
            code: state,
            args,
          });
        }}>
        fordít
      </Button>
    </div>
  );
};

CodeEditor.propTypes = {
  className: PropTypes.string,
  initialValue: PropTypes.string,
};

CodeEditor.defaultProps = {
  className: '',
  initialValue: '',
};

export { CodeEditor as default };
