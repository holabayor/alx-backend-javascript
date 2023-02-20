const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};

module.exports = countStudents;
