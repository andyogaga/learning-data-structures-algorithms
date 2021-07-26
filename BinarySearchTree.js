class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    /**
     * If empty, make root
     * else
     * make current
     * while current
     * if value > current?.value, make current = current.right
     * if value < current?.value, make current = current.left
     * -----
     */

    if (!this.root) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (current) {
        if (value > current.value) {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        }
      }
    }
  }

  printDF(node) {
    if (node) {
      console.log(node.value);
      this.printDF(node.left);
      this.printDF(node.right);
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (current.value == value) {
        return current;
      } else {
        if (value > current.value) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }
    return null;
  }

  delete(value){

  }
}

const BST = new BinarySearchTree();
BST.insert(70);
BST.insert(76);
BST.insert(60);
BST.insert(80);
BST.insert(58);
BST.insert(74);
BST.insert(67);
BST.insert(72);
BST.insert(81);
BST.insert(64);
console.log(BST.search(60));
