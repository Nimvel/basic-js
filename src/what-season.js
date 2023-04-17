const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let year
  let month
  let day

  if (!date) return 'Unable to determine the time of year!'
  if (!date.getUTCMonth) throw new Error('Invalid date!')

  try {
    year = date.getFullYear()
    month = date.getUTCMonth()
    day = date.getUTCDay()
  } catch (error) {
    throw new Error('Invalid date!')
  }

  return month < 2 
  ? "winter" : month < 5 
  ? "spring" : month < 8 
  ? "summer" : month < 11 
  ? "autumn" : "winter"
}

// getSeason(new Date(2020, 02, 31))

module.exports = {
  getSeason
};
