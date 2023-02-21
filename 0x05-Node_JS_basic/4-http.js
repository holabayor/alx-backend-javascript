const http = require('http');

const port = 1245;
const app = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

exports.module = app;
