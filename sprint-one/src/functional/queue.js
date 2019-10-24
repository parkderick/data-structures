var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++
    // for (var key in storage) {
    //   if (key) {
    //     storage[key+1] = storage[key]
    //   }
    // }
    // storage[0] = value
    // count++
  };

  someInstance.dequeue = function() {
    var pop = storage[0]
    delete storage[0]
    for (var key in storage) {
      storage[key-1] = storage[key]
    }
    delete storage[count-1]
    count--
    return pop
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
