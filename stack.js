class Stack {
  constructor(limit) {
    this.stack = [];
    this.maxHeight = limit;
  }

  push(val) {
    if (this.stack.length == this.maxHeight) {
      console.error("==> Stack is full");
      return;
    }
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length == 0) {
      console.error("==> Cannot pop from empty stack");
      return;
    }
    return this.stack.pop();
  }

  getTop() {
    if (this.stack.length == 0) {
      console.error("==> Cannot get data from empty stack");
      return;
    }
    return this.stack[this.stack.length - 1];
  }

  print() {
    console.log(this.stack);
  }
}

module.exports = Stack;
