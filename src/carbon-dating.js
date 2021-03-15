const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || sampleActivity.length === 0 || Number(sampleActivity) === 0 || isNaN(sampleActivity)) return false;
  if (Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) <= 0) return false;
  let t = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;
  t = (Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / k;
  return Math.ceil(t);
};
