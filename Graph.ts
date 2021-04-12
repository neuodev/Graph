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
    // check if the vertex exsit
    if (!this.map[from] || !this.map[to]) return false;
    this.map[from].adjacencyList.push(to);
  }
}

const graph = new Graph();

graph.addNode('Jone');
graph.addNode('Doe');
graph.addNode('Jane');
console.log(graph.addEdge('Jone', 'Doe'));

console.log(graph);
