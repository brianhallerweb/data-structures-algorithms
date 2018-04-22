class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  pop() {
    return this.data.pop();
  }
}
