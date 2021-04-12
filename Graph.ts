class Vertex {
  label: string;
  map: object;
  constructor(label) {
    this.label = label;
    this.map = {};
  }
}
class Graph {
  map = {};
  addNode(label: string) {
    const vertex = new Vertex(label);
    if (!this.map[label]) this.map[label] = vertex;
  }
}

const graph = new Graph();
graph.addNode('Jone');
graph.addNode('Doe');
graph.addNode('Jane');
console.log(graph);
