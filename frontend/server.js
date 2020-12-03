const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

const { FRONTEND_PORT = 3000 } = process.env;

app.use(morgan('common'));
app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(FRONTEND_PORT, () => {
  console.log(`static server running on port: ${FRONTEND_PORT}`);
});
