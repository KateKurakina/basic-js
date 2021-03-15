const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push("()");
      return chainMaker;
    }
    else {
      this.chain.push("( " + String(value) + " )");
      return chainMaker;
    }
  },
  removeLink(position) {
    if (!(isNaN(position))) {
      this.chain.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.chain.splice(0, this.getLength());
      throw new Error("Error");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
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

module.exports = chainMaker;
