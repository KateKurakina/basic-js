const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const propsTurns = Math.pow(2, disksNumber) - 1;
  const propsSeconds = Math.floor(propsTurns * 3600 / turnsSpeed);
  return {
    turns: propsTurns,
    seconds: propsSeconds
  }
}

module.exports = {
  calculateHanoi
};
