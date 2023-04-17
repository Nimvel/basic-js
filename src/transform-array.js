const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!arr) throw new NotImplementedError("'arr' parameter must be an instance of the Array!")

  let newArr = [...arr]

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] === "--discard-next" ) {
      let indexThroughOne = newArr[i + 2]
      let prev = typeof indexThroughOne === "string" 
      && indexThroughOne.substring(indexThroughOne.length - 4) === "prev"

      newArr.splice(i, prev ? 3 : 2)
      }
    if (newArr[i] === "--discard-prev" ) {
      i === 0 ? newArr.splice(i, 1) : newArr.splice(i - 1, 2)
    }

    if (newArr[i] === "--double-next") {
      newArr.splice(i, 1, newArr[i + 1])
    }
    if (newArr[i] === "--double-prev") {
      i === 0 ? newArr.splice(i, 1) : newArr.splice(i, 1, newArr[i - 1])
    }

    if (!newArr[i]) newArr.splice(i, 1)
  }
  return newArr
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))

// output: [1, 2, 3, 4, 5]

module.exports = {
  transform
};
