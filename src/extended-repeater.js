const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  str = String(str);
  let res = '';

  if (options.hasOwnProperty('addition')) {
    str += String(options.addition);
  }

  if (options.hasOwnProperty('additionRepeatTimes')) {
    for (let i = 1; i < options.additionRepeatTimes; i += 1) {
      str += (options.additionSeparator || '|') + options.addition;
    }
  }

  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 1; i < options.repeatTimes; i += 1) {
      res += str + (options.separator || '+');
    }
    res += str;
  } else {
    res = str;
  }
  return res;
}

module.exports = {
  repeater
};
