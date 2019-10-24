class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
  }
  enqueue(value) {
    this[this.count] = value;
    this.count++;
  }
  dequeue() {
    var dequeue = this[0];
    delete this[0];
    for (var key in this) {
    this[key-1] = this[key]
    }
    delete this[this.count-1]
    this.count--;
    return dequeue;
  }
  size() {
    if (this.count < 0) {
      return 0;
    } else {
      return this.count;
    }
  }
};
