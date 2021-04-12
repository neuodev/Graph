class Vertex {
  label: string;
  adjacencyList: [];
  constructor(label) {
    this.label = label;
    this.adjacencyList = [];
  }
}
class Graph {
  map = {};
  addNode(label: string) {
    const vertex = new Vertex(label);
    if (!this.map[label]) this.map[label] = vertex;
  }

  addEdge(from: string, to: string) {
    if (from === to) return;
    // check if the vertex exsit
    if (!this.map[from] || !this.map[to]) return false;
    this.map[from].adjacencyList.push(to);
  }
  print() {
    for (const node in this.map) {
      if (Object.prototype.hasOwnProperty.call(this.map, node)) {
        console.log(
          `${node} is Connected with [${this.map[
            node
          ].adjacencyList.toString()}]`
        );
      }
    }
  }

  removeNode(label: string) {
    if (!this.map[label]) return false;
    delete this.map[label];
    for (let n in this.map) {
      let adjacencyList = this.map[n].adjacencyList;
      const idx = adjacencyList.indexOf(label);
      adjacencyList.splice(idx, 1);
    }
  }

  removeEdge(from: string, to: string) {
    if (from == to) return;
    if (!this.map[from] || !this.map[from]) return;
    let adjacencyList = this.map[from].adjacencyList;
    let idx = adjacencyList.indexOf(to);
    if (idx === -1) return false;
    adjacencyList.splice(idx, 1);
    return true;
  }

  DepthFirstTraversal(root) {
    let node = this.map[root];

    if (!node) return;
    const set = new Set();
    this._DepthFirstTraversal(node, set);
    console.log(set);
    return set;
  }
  _DepthFirstTraversal(node, set) {
    set.add(node.label);
    let adjacencyList = node.adjacencyList;

    if (adjacencyList.length === 0 || !node || set.has(adjacencyList[0]))
      return;
    let nextNode = this.map[adjacencyList[0]];
    this._DepthFirstTraversal(nextNode, set);
  }

  DepthStack(root) {
    let node = this.map[root];
    if (!node) return;
    let stack = [];
    let visited = new Set();
    stack.push(node);

    while (stack.length > 0) {
      let current = stack.pop();
      visited.add(current.label);
      for (const node of current.adjacencyList) {
        if (visited.has(node)) continue;
        stack.push(this.map[node]);
      }
    }
    console.log(visited);
    return visited;
  }

  BreathFirstSearch(root) {
    let node = this.map[root];
    if (node == null) return;
    let visited = new Set();
    let queue = [];
    queue.push(node);
    while (queue.length > 0) {
      let current = queue.shift();
      visited.add(current.label);
      for (let n of current.adjacencyList) {
        if (visited.has(n)) continue;
        let nextNode = this.map[n];
        queue.push(nextNode);
      }
    }
    console.log(visited);
    return visited;
  }

  topologicalSorting() {
    let visited = new Set();
    let stack = [];
    for (let n in this.map) {
      this._topologicalSorting(this.map[n], visited, stack);
    }
  
    let sorted = [];
    while (stack.length > 0) {
      sorted.push(stack.pop());
    }
  
    return sorted;
  }

  _topologicalSorting(node: Vertex, visited: any, stack: string[]) {
    if (visited.has(node.label)) return ;
    visited.add(node.label);

    let adjacencyList = node.adjacencyList;
    for (let n in adjacencyList) {
      this._topologicalSorting(this.map[adjacencyList[n]], visited, stack);
    }
    // we are in the very end
    stack.push(node.label);
  }
}

const graph = new Graph();

graph.addNode('X');
graph.addNode('A');
graph.addNode('B');
graph.addNode('P');
graph.addEdge('X', 'A');
graph.addEdge('X', 'B');
graph.addEdge('A', 'P');
graph.addEdge('B', 'P');
// graph.removeNode('Jone');
// console.log(graph.removeEdge('Jone', 'Doe'));
graph.DepthFirstTraversal('C');
graph.DepthStack('A');
graph.BreathFirstSearch('A');
graph.topologicalSorting();
graph.print();
// console.log(graph);
