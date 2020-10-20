const path = require('path');
const fs = require('fs');

fs.open(
  path.resolve(__dirname, '..', 'temp', 'almafa.txt'),
  'w+',
  (error, fd) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log('file nyitás sikeres');

    fs.write(fd, Date.now().toString(), (error, written, res) => {
      console.log(error, written, res);
      fs.close(fd, (error) => {
        if (error) {
          console.log('hiba történ a bezáráskor', error);
        }
      });
    });
  }
);
