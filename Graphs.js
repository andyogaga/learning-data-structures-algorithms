class Vertice {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

const andy = new Vertice("Andy");

const connectVertices = (vertice1, vertice2) => {
  if (vertice1 && vertice2) {
    if (!vertice1.neighbors.includes(vertice2))
      vertice1.neighbors.push(vertice2);
    if (!vertice2.neighbors.includes(vertice1.value))
      vertice2.neighbors.push(vertice1);
  }
};
const visited = new Map();
const depthFirstSearch = (vertice) => {
  /**
   * Create a visited Map
   * add vertice to visited map
   * check vertice neighbors
   * map through neighbors, if neighbor is visited, skip
   * if not, recurse the function on that vertice
   */

  if (visited.get(vertice)) return;
  visited.set(vertice, true);
  console.log(vertice.value);
  vertice.neighbors.forEach((neighbor) => {
    depthFirstSearch(neighbor);
  });
};

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

const breathFirstSearch = (vertice) => {
  /**
   * if visited, return
   * set vertice as visited.
   * add vertice to queue
   * while queue length > 0
   * get element and set as current
   * map through current neighbors and add to queue
   *
   */
  const queue = new Queue();
  queue.insert(vertice);
  const visited2 = new Map();
  visited2.set(vertice, true);
  let current = null;
  while (queue.length > 0) {
    current = queue.get();
    console.log(current.value);
    current.neighbors.forEach((neighbor) => {
      if (!visited2.get(neighbor)) {
        queue.insert(neighbor);
      visited2.set(neighbor, true);
      }
      
    });
  }
};

const alice = new Vertice("Alice");
const mike = new Vertice("Mike");
const frankie = new Vertice("Frankie");
const yusuf = new Vertice("Yusuf");
const lech = new Vertice("Lech");
const oche = new Vertice("Oche");

connectVertices(andy, alice);
connectVertices(andy, mike);
connectVertices(andy, frankie);
connectVertices(andy, yusuf);
connectVertices(yusuf, alice);
connectVertices(mike, alice);
connectVertices(lech, alice);
connectVertices(lech, oche);
connectVertices(lech, frankie);
connectVertices(oche, mike);
connectVertices(alice, oche);
connectVertices(yusuf, mike);
connectVertices(yusuf, lech);
connectVertices(yusuf, frankie);
connectVertices(mike, mike);

depthFirstSearch(andy);
breathFirstSearch(andy);
