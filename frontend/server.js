const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

const { PORT } = process.env;

app.use(morgan('common'));
app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(PORT, () => {
  console.log(`Frontend static server running on port: ${PORT}`);
});
