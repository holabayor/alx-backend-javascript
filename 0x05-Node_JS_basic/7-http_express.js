const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;
const host = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {

  let txt = []
  txt.push('This is the list of our students');
  countStudents(process.argv[2]).then((data) => {
    res.write(data.join('\n'));

  });
});

app.listen(port, host, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
