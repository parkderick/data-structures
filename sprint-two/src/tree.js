var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)
  // array containing a number of subtrees

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var descendant = Tree(value);
  this.children.push(descendant);
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
};

treeMethods.contains = function(target) {
  var inner = function(innerTree) {
    if (innerTree.value === target) {
      return true;
    }
    // if (innerTree.children !== undefined) {
    for (var i = 0; i < innerTree.children.length; i++) {
      if (inner(innerTree.children[i])) {
        return true;
      }
    }
    return false;
  }
  return inner(this);

}

/*
 * Complexity: What is the time complexity of the above functions?
 addChild //  constant
 contains //  linear
 */
