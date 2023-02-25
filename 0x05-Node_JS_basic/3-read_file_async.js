/**
 * Counts the number of students in a file.
 * @param {string} path - Path of the csv file
 * @author Josh Liasu <a href="http://github.com/holabayor">
 */
const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const promise = (resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error || !fs.existsSync(path)) {
        reject(Error('Cannot load the database'));
      }
      let content = data.toString().split('\n');
      console.log(`Number of students: ${content.length - 1}`); // remove the header line
      content = content.slice(1);
      const subjects = {};
      for (const line of content) {
        const student = line.split(',');
        if (!subjects[student[3]]) subjects[student[3]] = [];
        subjects[student[3]].push(student[0]);
      }
      for (const subject in subjects) {
        if (subject) {
          console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
          resolve();
        }
      }
    });
  }; return new Promise(promise);
};

module.exports = countStudents;
