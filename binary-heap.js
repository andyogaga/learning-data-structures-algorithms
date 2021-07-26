class BinaryHeap {
  constructor() {
    this.values = [];
  }

  getParentIndex(currentIndex) {
    return Math.floor((currentIndex - 1) / 2);
  }

  swap(current, parent) {
    const temp = this.values[parent];
    this.values[parent] = this.values[current];
    this.values[current] = temp;
  }

  // add element to array
  // get last element
  // check if current > parent
  // swap parent and current until index = 0 or current < parent
  insert(val) {
    this.values.push(val);
    let parentIndex = this.getParentIndex(this.values.length - 1);
    let currentIndex = this.values.length - 1;

    while (
      currentIndex > 0 &&
      this.values[parentIndex] <= this.values[currentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  /**
   * pop out last element
   * save first element as temp
   * replace first element with popped out element
   * set root as current
   * get left and right children
   * check for highest value
   * swap highest value with current.
   * continue
   */
  remove() {
    const max = this.values[0];
    const last = this.values.pop();

    this.values[0] = last;
    let current = this.values[0];
    let currentIndex = 0;
    let leftChildIndex = currentIndex * 2 + 1;
    let rightChildIndex = currentIndex * 2 + 2;

    while (
      current <= this.values[rightChildIndex] ||
      current <= this.values[leftChildIndex]
    ) {
      if (
        this.values[rightChildIndex] >= this.values[leftChildIndex] &&
        current <= this.values[rightChildIndex]
      ) {
        current = this.values[rightChildIndex];
        this.swap(currentIndex, rightChildIndex);
        currentIndex = rightChildIndex;
        leftChildIndex = currentIndex * 2 + 1;
        rightChildIndex = currentIndex * 2 + 2;
      }
      if (
        this.values[leftChildIndex] > this.values[rightChildIndex] &&
        current <= this.values[leftChildIndex]
      ) {
        current = this.values[leftChildIndex];
        this.swap(currentIndex, leftChildIndex);
        currentIndex = leftChildIndex;
        leftChildIndex = currentIndex * 2 + 1;
        rightChildIndex = currentIndex * 2 + 2;
      }
    }
  }
}

const BH = new BinaryHeap();
BH.insert(4);
BH.insert(67);
BH.insert(44);
BH.insert(38);
BH.insert(9);
BH.insert(84);
BH.insert(24);
BH.insert(56);
BH.insert(19);
BH.insert(44);
BH.insert(44);
BH.insert(38);
console.log(BH);
BH.remove();
console.log(BH);
BH.remove();
console.log(BH);
BH.remove();
console.log(BH);
BH.remove();
console.log(BH);
BH.remove();
console.log(BH);
