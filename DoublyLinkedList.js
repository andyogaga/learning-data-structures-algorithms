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

  shift = () => {
    if(!this.head) return undefined;
    if(this.length === 1){
      return this.pop() ? true : false;
    }
    let newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
    this.length--
    return true;
  }

  unshift = val => {
    if(!this.length){
      this.push(val);
      return this;
    }
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  get = i = {
    
  }
}

let list = new DoublyLinkedList();
// list.push(45);
// list.push(7);
// list.push(85);
// list.push(72);
console.log(list.unshift('FIRST'));
console.log(list)
