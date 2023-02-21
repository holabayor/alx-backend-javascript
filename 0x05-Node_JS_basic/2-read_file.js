const fs = require('fs');

/**
 * Counts the number of students in a file.
 * @param {string} path - Path of the csv file
 * @author Josh Liasu <a href="http://github.com/holabayor">
 */

const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path)
      .toString().split('\n');

    console.log('Number of students:', data.length - 1); // remove the header line
    data = data.slice(1);
    const subjects = {};
    for (const line of data) {
      const student = line.split(',');
      if (!subjects[student[3]]) subjects[student[3]] = [];
      subjects[student[3]].push(student[0]);
    }
    for (const subject in subjects) {
      // if (subject)
      console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
