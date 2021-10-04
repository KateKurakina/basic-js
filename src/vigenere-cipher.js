import { NotImplementedError } from '../extensions/index.js';

export default class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) < 91) {
        result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(count % key.length) - 130) % 26 + 65);
        count++;
      }
      else result += message[i];
    }
    if (this.isDirect) return result;
    else return result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    let count1 = 0;
    key = key.toUpperCase();
    message = message.toUpperCase();
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(count1 % key.length)) % 26 + 65);
        count1++;
      }
      else result += message[i];
    }
    if (this.isDirect) return result;
    else return result.split('').reverse().join('');
  }
}
