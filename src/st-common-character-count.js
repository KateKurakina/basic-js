import { NotImplementedError } from '../extensions/index.js';

export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s = s2.split("");
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s1[i] === s[j]) {
        count++;
        s.splice(j, 1);
        break;
      }
    }
  }
  return count;
}
