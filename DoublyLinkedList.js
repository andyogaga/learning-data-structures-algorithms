class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = val => {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  pop = () => {
    if (!this.length) return undefined;
    let oldTail = this.tail;
    if (oldTail.prev) {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
      this.length--;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0
    }
    oldTail.prev = null;
    return oldTail;
  };
}

let list = new DoublyLinkedList();
list.push(45);
list.push(7);
console.log(list.pop());
