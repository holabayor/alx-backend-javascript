const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';
const database = process.argv.length > 2 ? process.argv[2] : 'database.csv';

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(database)
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');
        res.end(data.join('\n'));
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
