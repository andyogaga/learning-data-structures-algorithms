class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Stack => Needs to have constant time and is FILO => Two fxns push and pop
class Stack {
  constructor(){
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

// Queue => Needs to have constant time and is FIFO => Two fxns push and pop
class Queue {
  constructor(){
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

  DLLPop = () => {
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

  pop = () => {
    if(!this.head) return undefined;
    if(this.length === 1){
      return this.DLLPop() ? true : false;
    }
    let newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
    this.length--
    return true;
  };
}