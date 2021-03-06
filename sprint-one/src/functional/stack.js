var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };
  someInstance.pop = function() {
    var pop = storage[count-1];
    delete storage[count-1];
    count--;
    return pop;
  };
  someInstance.size = function() {
    if (count < 0) {
      return 0;
    } else {
      return count;
    }  
  };
  return someInstance;
};

