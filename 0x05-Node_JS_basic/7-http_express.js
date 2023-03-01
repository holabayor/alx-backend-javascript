const express = require('express');
const fs = require('fs');

const app = express();

const port = 1245;
const host = 'localhost';
const database = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error || !fs.existsSync(path)) {
        reject(Error('Cannot load the database'));
      }
      const response = [];
      let msg = '';
      let content = data.toString().trim().split('\n');
      msg = `Number of students: ${content.length - 1}`; // remove the header line
      response.push(msg);
      content = content.slice(1);
      const subjects = {};
      for (const line of content) {
        const student = line.split(',');
        if (!subjects[student[3]]) subjects[student[3]] = [];
        subjects[student[3]].push(student[0]);
      }
      for (const subject in subjects) {
        if (subject) {
          msg = `Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`;
          response.push(msg);
        }
      }
      resolve(response);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database).then((data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    res.write(Buffer.from(data.join('\n')));
    res.end();
  });
});

app.listen(port, host, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
