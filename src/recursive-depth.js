import { NotImplementedError } from '../extensions/index.js';

export default class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let depth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count = this.calculateDepth(arr[i]);
        if (depth < count) depth = count;
      }
    }
    return depth + 1;
  }
}
