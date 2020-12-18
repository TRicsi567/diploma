import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeHighlighter = ({ children }) => {
  return (
    <SyntaxHighlighter showLineNumbers language='cpp' style={monokai}>
      {children}
    </SyntaxHighlighter>
  );
};

export { CodeHighlighter as default };
