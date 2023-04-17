const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let count = 0

    return arr.filter(e => typeof e === 'object').length != 0
      ? count + 1 + this.calculateDepth([].concat(...arr.filter(e => typeof e === 'object')))
      : count + 1
  }
}
const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([[[]]]))

module.exports = {
  DepthCalculator
};
