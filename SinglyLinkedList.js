// Learning
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  set(v) {
    this.val = v;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = val => {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  };

  pop = () => {
    if (!this.head) return undefined;
    let current = this.head;
    let past = this.head;
    while (current.next) {
      past = current;
      current = current.next;
    }
    this.length--;
    past.next = null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return (this.tail = past);
  };

  shift = () => {
    if (!this.head) return undefined;
    let oldHead = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  };

  unshift = val => {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  };

  get = i => {
    if (!this.length || i >= this.length || i < 0) return null;
    let currentNode = this.head;
    let j = 0;
    while (j < i) {
      currentNode = currentNode.next;
      j++;
    }
    return currentNode;
  };

  set = (i, val) => {
    let currentNode = this.get(i);
    if (!currentNode) return false;
    currentNode.set(val);
    return true;
  };

  insert = (i, val) => {
    let newNode = new Node(val);
    if (i > this.length || i < 0) return false;
    if (!this.length) {
      this.push(val);
    } else {
      if (this.length === i) {
        this.push(val);
        return true;
      } else if (i === 0) {
        return this.unshift(val) ? true : false;
      } else {
        let pinNode = this.get(i - 1);
        let nextNode = this.get(i);
        newNode.next = nextNode;
        pinNode.next = newNode;
      }
    }
    this.length++;
    return true;
  };

  remove = i => {
    if (!this.length || i >= this.length || i < 0) return false;
    if (i === 0) {
      this.shift();
      return true;
    } else if (i === this.length - 1) {
      this.pop();
      return true;
    } else {
      let pinNode = this.get(i - 1);
      let nextNode = this.get(i);
      pinNode.next = nextNode.next;
      pinNode.next = newNode;
    }
  };

  // Reverse without making a copy
  /* Check if empty
      loop through from start to end
      save the next as variable
      set present to point previous as next
      reset the next to point previous
      then set the head to the tail
      */
  reverse = () => {
    if(!this.length) return undefined;
    let current = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let next;
    for (let i=0; i<this.length; i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(12);
list.push(45);
list.push(556);
console.log(list);
console.log(list.reverse());
// console.log(list.get(4));
