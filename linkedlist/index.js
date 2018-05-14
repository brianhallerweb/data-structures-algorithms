// --- Directions
// Implement classes Node and Linked Lists

// Each node has a data property and a next (the next node in the list) property

//The linked list has 1 property and many methods
//The 1 property is head, the node that starts the list
//The core methods are size, getAt, removeAt, insertAt, and forEach
//The optional methods are getFirst, getLast, insertFirst, insertLast, removeFirst, removeLast, and clear.

//Linked list implementations vary. It is certainly possible to design a linked list with different properties and methods.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let nextNode = this.head;
    while (nextNode) {
      counter++;
      nextNode = nextNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      let next = this.head;
      this.head = new Node(data, next);
      return;
    }
    if (index >= this.size()) {
      const previous = this.getAt(this.size() - 1);
      previous.next = new Node(data);
      return;
    }
    const previous = this.getAt(index - 1);
    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
