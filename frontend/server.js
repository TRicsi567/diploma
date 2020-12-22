const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

const { PORT = 3000 } = process.env;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/manifest.json', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'manifest.json'));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
