const fs = require('fs');

/**
 * Counts the number of students in a file.
 * @param {string} path - Path of the csv file
 * @author Josh Liasu <a href="http://github.com/holabayor">
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error || !fs.existsSync(path)) {
        reject(Error('Cannot load the database'));
        return;
      }
      const response = [];
      let msg = '';
      let content = data.toString().split('\n');
      msg = `Number of students: ${content.length - 1}`; // remove the header line
      console.log(msg);
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
          console.log(msg);
          response.push(msg);
        }
      }
      resolve(response);
    });
  });
}
module.exports = countStudents;
