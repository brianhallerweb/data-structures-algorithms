class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  add(record) {
    this.stack1.push(record);
  }
  remove() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    const record = this.stack2.pop();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return record;
  }
  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    const record = this.stack2.peek();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return record;
  }
}
