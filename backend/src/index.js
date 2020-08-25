const express = require('express');
const morgan = require('morgan');
const compileRouter = require('./routes/compile');

const app = express();

app.use(morgan('dev'));

app.use('/api', compileRouter);

app.listen(8080, () => {
  console.log(`server listening on port ${8080}`);
});
