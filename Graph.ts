class Vertex {
  label: string;
  adjacencyList: object;
  constructor(label) {
    this.label = label;
    this.adjacencyList = {};
  }
}
class Graph {
  map = {};
  addNode(label: string) {
    const vertex = new Vertex(label);
    if (!this.map[label]) this.map[label] = vertex;
  }

  addEdge(from: string, to: string) {
      
  }
}

const graph = new Graph();

graph.addNode('Jone');
graph.addNode('Doe');
graph.addNode('Jane');
console.log(graph);
