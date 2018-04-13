// Create a queue from 2 stacks. The queue should have an enqueue method and a dequeue method.

class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  size() {
    return this.data.length;
  }
}

class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  enqueue(record) {
    this.inbox.push(record);
  }
  dequeue() {
    while (this.inbox) {
      this.outbox.push(this.inbox.pop());
    }
    const record = this.outbox.pop();
    while (this.outbox) {
      this.inbox.push(this.outbox.pop());
    }
    return record;
  }
}
