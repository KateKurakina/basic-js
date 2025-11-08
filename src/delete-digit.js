const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n);
  let arr = n.split("");
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i+1]) {
      arr.splice(i, 1);
      return Number(arr.join(''));
    }
  }
  arr.splice(arr.length - 1, 1);
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
