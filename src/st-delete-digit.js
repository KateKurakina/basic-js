import { NotImplementedError } from '../extensions/index.js';

export default function deleteDigit(n) {
  n = String(n);
  let arr = n.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i+1]) {
      arr.splice(i, 1);
      return Number(arr.join(''));
    }
  }
  arr.splice(arr.length - 1, 1);
  return Number(arr.join(''));
}
