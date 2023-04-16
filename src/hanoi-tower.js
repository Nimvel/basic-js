const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let turns = 2 ** disksNumber - 1
  let seconds = Math.floor((turnsSpeed / 3600) * turns)
  return {turns, seconds}
}

// console.log(calculateHanoi(5, 4074))
// turns: 31, seconds: 27
// console.log(calculateHanoi(38, 4594))
// { turns: 274877906943, seconds: 215402800390 }

module.exports = {
  calculateHanoi
};
