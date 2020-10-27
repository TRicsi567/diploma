import { Router } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
import childProcess from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import chokidar from 'chokidar';

const router = Router();

const FILE_DELETION_TIME_OUT = process.env.FILE_DELETION_TIME_OUT || 1000 * 60;

const TEMP_FILE_PATH = path.join(__dirname, '..', 'temp');

router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

router.post('/compile', bodyParser.json(), (req, res) => {
  const { code } = req.body;
  const id = uuidv4();
  if (!code) {
    res.status(400).send();
    return;
  }

  const sessionPath = path.resolve(TEMP_FILE_PATH, id);

  try {
    fs.mkdirSync(sessionPath);

    setTimeout(() => {
      fs.rmdirSync(sessionPath, { recursive: true });
    }, FILE_DELETION_TIME_OUT);

    fs.writeFileSync(path.resolve(sessionPath, 'main.c'), code, {
      flag: 'w',
    });

    childProcess.exec(
      `docker run --rm --volume=${sessionPath}:/usr/app compilebox`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }

        chokidar
          .watch(['output.log', 'error.log'], { cwd: sessionPath })
          .on('add', (fileName) => {
            const fileContent = fs.readFileSync(
              path.resolve(sessionPath, fileName)
            );
            res.status(200).send(
              JSON.stringify({
                succes: fileName === 'output.log',
                result: fileContent.toString(),
              })
            );
          });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(416).send();
  }
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
