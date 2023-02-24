const http = require('http');

const port = 1245;
const host = 'localhost';

const app = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
})

app.listen(port, host, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
