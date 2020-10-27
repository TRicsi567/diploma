import express from 'express';
import morgan from 'morgan';
import { router } from './router';
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

app.use('/api', cors(), router);

app.listen(PORT, () => {
  console.log(chalk.greenBright(`server listening on port ${PORT}`));
});
