import { Router } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
import childProcess from 'child_process';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const FILE_DELETION_TIME_OUT = process.env.FILE_DELETION_TIME_OUT || 10000;

console.log(FILE_DELETION_TIME_OUT);

const TEMP_FILE_PATH = path.join(__dirname, '..', 'temp');

router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

router.post('/compile', bodyParser.json(), (req, res) => {
  const { code } = req.body;
  console.log(':(((', req.body);
  const id = uuidv4();
  if (!code) {
    res.status(400).send();
    return;
  }

  const sessionPath = path.resolve(TEMP_FILE_PATH, id);

  fs.mkdir(sessionPath, (error) => {
    if (error) {
      res.status(416).send();
    }
  });

  fs.open(path.resolve(sessionPath, 'result'), 'w', (err, fd) => {
    if (err) {
      console.error('result open hiba', err);
      return;
    }
    fs.close(fd, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });

  fs.open(path.resolve(sessionPath, 'main.c'), 'w', (err, fd) => {
    if (err) {
      console.error('main open hiba', err);
      return;
    }
    fs.write(fd, code, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      fs.close(fd, (err) => {
        setTimeout(() => {
          fs.rmdir(sessionPath, { recursive: true }, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }, FILE_DELETION_TIME_OUT);
        if (err) {
          console.error('file', err);
          return;
        }
      });
    });
  });

  res.status(200).send();
});

// function compileProgram({ command, options = {}, callback }) {
//   return new Promise((resolve, reject) => {
//     exec(command, options, (error, stdout, stdin) => {
//       callback(error, stdout, stdin);
//       if (error) {
//         reject({ error });
//         return;
//       }
//       resolve({ stdout, stdin });
//     });
//   });
// }

export { router };
