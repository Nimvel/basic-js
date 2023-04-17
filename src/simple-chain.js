const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this ? this.length : 0
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.chain ? this.chain.push(value) : this.chain = [value]
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (isNaN(position) || !this.chain || position < 1 || position > this.chain.length ) {
      this.chain = null
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let reverse = []

    if (this.chain) this.chain.forEach(e => reverse.unshift(e))

    this.chain = reverse
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let chain = this.chain
    this.chain = null
    return chain ? chain.map((e, i) => i > 0 ? `~~( ${e} )` : `( ${e} )`).join('') : ''
  }
}

console.log(
  chainMaker
  .addLink('GHI')
  .addLink(null)
  .reverseChain()
  .addLink(333)
  .reverseChain()
  .reverseChain()
  .addLink(0)
  .reverseChain()
  .reverseChain()
  .addLink('GHI')
  .finishChain()
)
// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'

module.exports = {
  chainMaker
};
