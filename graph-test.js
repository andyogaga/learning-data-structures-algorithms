class Vertice {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

class Queue {
  constructor() {
    this.values = [];
    this.length = 0;
  }

  insert(vertice) {
    this.values.push(vertice);
    this.length++;
  }

  get() {
    const val = this.values.shift();
    if (val) {
      this.length--;
      return val;
    }
  }
}

class Graph {
  constructor() {
    this.root = null;
  }

  insert(value, vertice) {
    /**
     * if no root, set vertice
     * else
     * check vertice neighbors for similar
     * if not available
     * add value vertice to parent vertice neighbors
     * also add parent vertice to child neighbors
     */
    if (!this.root) {
      this.root = value;
    }
    if (!vertice) {
      vertice = this.root;
    }
    if (!vertice.neighbors.includes(value)) {
      vertice.neighbors.push(value);
      value.neighbors.push(vertice);
    }
  }

  depthFirstSearch(value) {
    /**
     * create a map
     * visit and add in map
     * then check its neighbors and if not visited, recurse dfs
     */
    const visited = new Map();
    let found = null;
    (function check(vertice) {
      visited.set(vertice, true);
      if (vertice.value == value) {
        found = vertice;
        return;
      }
      vertice.neighbors.forEach((element) => {
        if (!visited.get(element)) {
          check(element);
        }
      });
    })(this.root);
    return found;
  }

  breadthFirstSearch(value) {
    /**
     * create map and queue
     * check current neighbors and add to queue, also mark as visited
     * map through queue until zero
     */
    const visited = new Map();
    const queue = new Queue();
    let found = null;
    queue.insert(this.root);
    while (queue.length > 0) {
      const current = queue.get();
      visited.set(current, true);
      if (current.value == value) {
        found = current;
        break;
      }
      current.neighbors.forEach((element) => {
        if (!visited.get(element)) {
          queue.insert(element);
        }
      });
    }
    return found;
  }

  print() {
    /**
     * create a map
     * visit and add in map
     * then check its neighbors and if not visited, recurse dfs
     */
    const visited = new Map();
    const check = (vertice) => {
      visited.set(vertice, true);
      console.log(
        `${vertice.value}, Neighbors: ${vertice.neighbors.map((v) => v.value)}`
      );
      vertice.neighbors.forEach((element) => {
        if (!visited.get(element)) {
          check(element);
        }
      });
    };
    check(this.root);
  }
}

const andy = new Vertice("Andy");
const alice = new Vertice("Alice");
const mike = new Vertice("Mike");
const frankie = new Vertice("Frankie");
const yusuf = new Vertice("Yusuf");
const lech = new Vertice("Lech");
const oche = new Vertice("Oche");

const graph = new Graph();

graph.insert(andy, alice);
graph.insert(andy, mike);
graph.insert(andy, frankie);
graph.insert(andy, yusuf);
graph.insert(yusuf, alice);
graph.insert(mike, alice);
graph.insert(lech, alice);
graph.insert(lech, oche);
graph.insert(lech, frankie);
graph.insert(oche, mike);
graph.insert(alice, oche);
graph.insert(yusuf, mike);
graph.insert(yusuf, lech);
graph.insert(yusuf, frankie);
graph.insert(mike, mike);

console.log(graph.breadthFirstSearch("Frankie"));
