var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.count = 0;
  return instance;
};

var stackMethods = {
  push: function(value) {
    this[this.count] = value;
    this.count++;
  },
  pop: function() {
    var pop = this[this.count-1];
    delete this[this.count-1];
    this.count--;
    return pop;
  },
  size: function() {
    if (this.count < 0) {
      return 0;
    } else {
      return this.count;
    }
  }
}; 


