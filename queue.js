class Queue {
  constructor(type, limit) {
    this.queue = [];
    this.maxLength = limit;
    this.pointer = 0;
    this.check = true;
    if (type == "circle") {
      this.circle = true;
    } else if (type == "normal") {
      this.circle = false;
    } else {
      console.error("==> Invalid type");
      this.check = false;
    }
  }

  enqueue(val) {
    if (!this.check) return;
    if (this.circle) {
      this.queue[this.pointer] = val;
    } else {
      if (this.queue.length == this.maxLength) {
        console.error("==> Queue is full");
        return;
      }
      this.queue.push(val);
    }
    this.pointer = (this.pointer + 1) % this.maxLength;
  }

  dequeue() {
    if (!this.check) return;
    if (this.queue.length == 0) {
      console.error("==> Cannot dequeue from an empty queue");
      return;
    }
    return this.queue.shift();
  }

  getNext() {
    return this.queue[this.queue.length - 1];
  }

  print() {
    console.log(this.queue);
  }
}

module.exports = Queue;
