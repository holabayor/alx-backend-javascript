/**
 * Counts the number of students in a file.
 * @param {string} path - Path of the csv file
 * @author Josh Liasu <a href="http://github.com/holabayor">
 */
const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  console.log(`Number of students: ${data.length - 1}`); // remove the header line
  data = data.toString().split('\n').slice(1);
  const subjects = {};
  for (const line of data) {
    const student = line.split(',');
    if (!subjects[student[3]]) subjects[student[3]] = [];
    subjects[student[3]].push(student[0]);
  }
  for (const subject in subjects) {
    if (subject) {
      console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
    }
  }
};

module.exports = countStudents;
