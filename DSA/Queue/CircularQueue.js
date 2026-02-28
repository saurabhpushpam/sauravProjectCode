//  Circular Queue (Fixed Size)

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      return false; // queue overflow
    }

    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null; // queue underflow
    }

    const value = this.queue[this.front];
    this.queue[this.front] = undefined; // optional cleanup
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return value;
  }

  peek() {
    return this.isEmpty() ? null : this.queue[this.front];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    for (let i = 0; i < this.size; i++) {
      result.push(this.queue[(this.front + i) % this.capacity]);
    }
    console.log(result.join(" "));
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.print();
console.log(circularQueue.dequeue());
circularQueue.print();
console.log(circularQueue.peek());
console.log(circularQueue.getSize());
console.log(circularQueue.isEmpty());
console.log(circularQueue.isFull());
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.enqueue(60);
circularQueue.print();
console.log(circularQueue.isFull());
circularQueue.enqueue(70); // should indicate overflow
circularQueue.print();
