const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || sampleActivity.length === 0 || Number(sampleActivity) === 0 || isNaN(sampleActivity)) return false;
  if (Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) <= 0) return false;
  let t = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;
  t = (Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
