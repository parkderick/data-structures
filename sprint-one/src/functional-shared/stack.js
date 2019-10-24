var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.count = 0;
  _.extend(stack, stackMethods);
  return stack;
}
 
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


// Work within the src/functional-shared/ folder
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend  to copy the methods onto the instance