import { NotImplementedError } from '../extensions/index.js';

export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push("()");
      return this;
    }
    else {
      this.chain.push("( " + String(value) + " )");
      return this;
    }
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    for(let i = 0; i < this.getLength(); i++) {
      if(i !== this.getLength() - 1) {
        this.chain[i] = this.chain[i] + '~~';
      }
    }
    let res = this.chain.join('');
    this.chain.splice(0, this.getLength());
    return res;
  }
};

