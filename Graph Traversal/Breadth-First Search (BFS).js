
// This code implements the Breadth-First Search (BFS) algorithm for traversing a graph.
// BFS explores the graph level by level, starting from a given node and visiting all its neighbors before moving on to the next level.



function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    while (queue.length) {
      const node = queue.shift();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        for (const neigh of graph[node]) {
          if (!visited.has(neigh)) {
            queue.push(neigh);
          }
        }
      }
    }
  }
  
  // Example:
  bfs(graph, 'A');  
  // Output order: A, B, C, D
  

  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
  };
  