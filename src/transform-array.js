import { NotImplementedError } from '../extensions/index.js';

export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");

  let tArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 2] !== '--discard-next') {
        tArr.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        tArr.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') {
        tArr.push(arr[i - 1]);
      }
    } else tArr.push(arr[i]);
  }
  return tArr;
}
