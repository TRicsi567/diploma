const express = require('express');
const morgan = require('morgan');
const router = require('./router').router;
const chalk = require('chalk');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

app.use('/api', router);

app.listen(8080, () => {
  console.log(chalk.greenBright(`server listening on port ${PORT}`));
});
