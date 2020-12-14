import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import childProcess from 'child_process';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.post('/api/compile', (req, res) => {
  const { code, args } = req.body;

  if (!code) {
    res.status(400).send({
      message: 'Please provide some source code',
    });
    return;
  }

  const id = uuidv4();

  fs.mkdirSync(path.resolve('/usr/temp', id));

  fs.writeFileSync(path.resolve('/usr/temp', id, 'main.c'), code);

  const {
    VOLUME_NAME = 'diploma-temp-files',
    COMPILE_CONTAINER_TIMEOUT = '30s',
    COMPILE_IMAGE_NAME = 'diploma-compile-client',
  } = process.env;

  const command = [
    'docker_timeout.sh',
    COMPILE_CONTAINER_TIMEOUT,
    VOLUME_NAME,
    COMPILE_IMAGE_NAME,
    path.resolve('/usr/temp', id, 'main.c'),
    args,
  ]
    .filter(Boolean)
    .join(' ');

  childProcess.exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error('error', err);
      res.status(400).send();
      return;
    }

    fs.rmdir(path.resolve('/usr/temp', id), { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });

    res.status(200).send({
      stdout: stdout || null,
      stderr: stderr || null,
    });
  });
});

app.listen(PORT, () => {
  console.log(chalk.greenBright(`server listening on port ${PORT}`));
});
