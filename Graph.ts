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
}

const graph = new Graph();

graph.addNode('Jone');
graph.addNode('Doe');
graph.addNode('Jane');
graph.addEdge('Jone', 'Doe');
graph.addEdge('Jone', 'Jane');
graph.addEdge('Jone', 'Jone');
graph.addEdge('Doe', 'Jone');
graph.addEdge('Doe', 'Jane');
graph.addEdge('Jane', 'Doe');
graph.addEdge('Jane', 'Jone');
// graph.removeNode('Jone');
console.log(graph.removeEdge('Jone', 'Doe'));
graph.print();
console.log(graph);
