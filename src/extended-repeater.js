module.exports = function repeater(str, options) {
  str = String(str);
  let res = '';

  if (options.hasOwnProperty('addition')) {
    str += String(options.addition);
  }

  if (options.hasOwnProperty('additionRepeatTimes')) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      str += (options.additionSeparator || '|') + options.addition;
    }
  }

  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 1; i < options.repeatTimes; i++) {
      res += str + (options.separator || '+');
    }
    res += str;
  } else {
    res = str;
  }
  return res;
};
  
