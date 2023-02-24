const http = require('http');
const { hostname } = require('os');

const port = 1245;
const host = 'localhost';
const app = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
})

app.listen(port, host, () => {
  console.log(`Server listening on port ${port}`);
});

exports.module = app;
