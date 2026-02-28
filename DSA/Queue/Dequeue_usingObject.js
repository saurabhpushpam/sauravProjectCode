class Deque {
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
  }

  addFront(element) {
    this.front--;
    this.items[this.front] = element;
  }

  addBack(element) {
    this.items[this.back] = element;
    this.back++;
  }

  removeFront() {
    if (this.isEmpty()) return null;

    const value = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return value;
  }

  removeBack() {
    if (this.isEmpty()) return null;

    this.back--;
    const value = this.items[this.back];
    delete this.items[this.back];
    return value;
  }

  peekFront() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  peekBack() {
    return this.isEmpty() ? null : this.items[this.back - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.back - this.front;
  }

  clear() {
    this.items = {};
    this.front = 0;
    this.back = 0;
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
