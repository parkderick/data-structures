var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  _.extend(tree, methods)
  return tree;
};

var methods = {
  insert: function(input) {
    var helper = function(level) {
      if (input > level.value) {
        if (!level.right) {
          level.right = BinarySearchTree(input);
          return;
        } else {
          helper(level.right);
        }
      } else {
        if (!level.left) {
          level.left = BinarySearchTree(input);
          return;
        } else {
          helper(level.left);
        }
      }
    }
    helper(this);
  },
  contains: function(input) {
    var contains = false;
    var helper = function(level) {
      if (level.value === input) {
        return true;
      }
      if (input > level.value) {
        if (level.right) {
          return helper(level.right);
        }
      } else {
        if (level.left) {
          return helper(level.left);
        }
      }
    }
    contains = helper(this);
    return contains ? true : false;
  },
  depthFirstLog: function(cb) {
    var helper = function(level) {
      cb(level.value);
      if (level.left) {
        helper(level.left);
      }
      if (level.right) {
        helper(level.right);
      }
    }
    helper(this);
  }
}


/*
 * Complexity: What is the time complexity of the above functions? Best Case: Logarithmic
 insert //  Best Case Logarithmic Worst Case linear
 contains //  Best Case Logarithmic Worst Case linear
 depthFirstLog //  Best Case Logarithmic Worst Case linear
 */
