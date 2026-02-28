class Deque {
  constructor() {
    this.items = [];
  }

  addFront(element) {
    this.items.unshift(element);
  }

  addBack(element) {
    this.items.push(element);
  }

  removeFront() {
    return this.isEmpty() ? null : this.items.shift();
  }

  removeBack() {
    return this.isEmpty() ? null : this.items.pop();
  }

  peekFront() {
    return this.isEmpty() ? null : this.items[0];
  }

  peekBack() {
    return this.isEmpty()
      ? null
      : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const deque = new Deque();
deque.addBack(10);
deque.addBack(20);
deque.addFront(5);
console.log(deque.peekFront());
console.log(deque.peekBack());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
deque.removeBack();
console.log(deque.size());
deque.clear();
console.log(deque.isEmpty());
console.log(deque.removeFront()); // null
console.log(deque.removeBack()); // null
console.log(deque.peekFront()); // null
console.log(deque.peekBack()); // null
