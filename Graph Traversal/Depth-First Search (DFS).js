
// Depth-First Search (DFS) implementation in JavaScript
// This code implements the Depth-First Search (DFS) algorithm for traversing a graph.
// DFS explores as far as possible along each branch before backtracking. It can be implemented using recursion or an explicit stack.
// In this example, we use recursion to traverse the graph.
// The graph is represented as an adjacency list, where each node points to its neighbors.


function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;
    console.log(node);
    visited.add(node);
    for (const neigh of graph[node]) {
      dfs(graph, neigh, visited);
    }
  }
  
  // Example:
  dfs(graph, 'A');  
  // Possible output: A, B, D, C
  

  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
  };
  