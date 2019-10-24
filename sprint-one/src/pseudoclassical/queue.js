var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};
  
Queue.prototype.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
},
Queue.prototype.dequeue = function() {
  var dequeue = this[0];
  delete this[0];
  for (var key in this) {
    this[key-1] = this[key]
  }
  delete this[this.count-1]
  this.count--;
  return dequeue;
},
Queue.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  } else {
    return this.count;
  }
};