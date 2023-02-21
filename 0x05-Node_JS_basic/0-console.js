/**
 * Displays a message to the STDOUT
 * @param {string} message to display
 * @author Josh Liasu <a href="http://github.com/holabayor">
 */

const displayMessage = (args) => {
  process.stdout.write(args + '\n');
};

module.exports = displayMessage;
