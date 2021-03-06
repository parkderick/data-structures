

// Instantiate a new graph
var Graph = function() {
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [node];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (this[key][0] !== undefined) {
      if (this[key].includes(node)) {
        this[key].splice(this[key].indexOf(node), 1);
      }
    }
  }
  delete this[node]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this[fromNode] && this[toNode] !== undefined) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this[fromNode] !== undefined) {
    this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
    this[toNode].splice(this[toNode].indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    cb(this[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions? Constant
 addNode //  constant
 contains //  constant
 removeNode //  constant
 hasEdge //  constant
 addEdge //  constant
 removeEdge //  constant
 forEachNode //  linear
 */