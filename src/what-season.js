import { NotImplementedError } from '../extensions/index.js';

export default function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (typeof date.getTime !== 'function') throw new Error ("Invalid date!");
  if (Object.getOwnPropertyNames(date).length) throw new Error ("Invalid date!");

  let month = date.getMonth();

  if (month < 2 || month === 11) {
    return 'winter';
  }
  if (month >= 2 && month < 5) {
    return 'spring';
  }
  if (month >= 5 && month < 8) {
    return 'summer';
  }
  if (month >= 8 && month < 11) {
    return /autumn|fall/;
  }
}
