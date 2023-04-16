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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let controlSequences = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]

  let arrControlSequences = []
  let index
  
  if (!arr) throw new NotImplementedError("'arr' parameter must be an instance of the Array!")

  for (let j = 0; j < arr.length - 1; j++) {
    if (!isNaN(j)) return arr
  }

  console.log(arrControlSequences) 

  arr.map(e => controlSequences.indexOf(e) !== -1 && arrControlSequences.push(e))

  for (let i = 0; i < arrControlSequences.length - 1; i++) {
    index = arr.indexOf(arrControlSequences[i])


    if (arrControlSequences[i] === "--discard-next" ) arr.splice(index, 2)
    if (arrControlSequences[i] === "--discard-prev" ) {
      if (arr.indexOf(arrControlSequences[i]) === 0) arr.shift()
      else arr.splice(index - 1, 2)
    }
    
    if (arrControlSequences[i] === "--double-next") arr.splice(index, 1, arr[index + 1])
    if (arrControlSequences[i] === "--double-prev") arr.splice(index - 1, 2)
    // if (arrControlSequences[i] === "--double-prev") arr.splice(index, 1, arr[index - 2])
  }
  

  return arr
}

// input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
//                     output: [1, 2, 3, 1337, 1337, 1337, 4, 5]

console.log(transform([ '--discard-prev', 1, 2, 3 ]) )

module.exports = {
  transform
};
