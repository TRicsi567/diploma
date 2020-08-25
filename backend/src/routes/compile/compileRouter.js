const Router = require('express').Router;
// const exec = require('child_process').exec;

const router = Router();

const bodyParser = require('body-parser');

const fs = require('fs');

const childProcess = require('child_process');

router.get('/', (req, res) => {
  res.send(JSON.stringify({ hello: 'world' }));
});

router.post('/compile', bodyParser.json(), (req, res) => {
  const { code } = req.body;
  fs.writeFile('./code.js', code, (error) => {
    if (error) {
      return;
    }

    childProcess.exec('node ./code.js', (error, stdout, stdin) => {
      console.log(error, stdout, stdin);
      res.send(stdout);
    });
  });
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

exports.router = router;
