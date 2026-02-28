class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const element = this.items[this.front];
    this.front++;
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }

  isEmpty() {
    return this.front >= this.items.length;
  }

  size() {
    return this.items.length - this.front;
  }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false

queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // true
queue.dequeue(); // "Queue is empty"
