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

  let newArr = [...arr]

  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (isNaN(arr[i]) && controlSequences.indexOf(arr[i]) === -1) return arr
  // }

  newArr.map(e => controlSequences.indexOf(e) !== -1 && arrControlSequences.push(e))

  for (let i = 0; i < newArr.length; i++) {
    index = newArr.indexOf(arrControlSequences[i])

    if (arrControlSequences[i] === "--discard-next" ) newArr.splice(index, 2)
    if (arrControlSequences[i] === "--discard-prev" ) 
      index === 0 ? newArr.splice(index, 1) : newArr.splice(index - 1, 2)
    
      // console.log(newArr.splice(index, 1, newArr[index + 1]))
      console.log("index: ", index)
      console.log("newArr[index + 1]:", newArr[index + 1])

    if (arrControlSequences[i] === "--double-next") newArr.splice(index, 1, newArr[index + 1])
    if (arrControlSequences[i] === "--double-prev")
      index === 0 ? newArr.splice(index, 1) : newArr.splice(index, 1, newArr[index - 1])

    if (!newArr[i]) newArr.splice(i, 1)
  }
  

  return newArr
}

// input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
//                     output: [1, 2, 3, 1337, 1337, 1337, 4, 5]

module.exports = {
  transform
};
