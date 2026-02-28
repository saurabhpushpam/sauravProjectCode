class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node at the end
  append(value) {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Add a node at the beginning
  prepend(value) {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  // Insert at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.size) return false;

    if (index === 0) {
      this.prepend(value);
      return true;
    }
    if (index === this.size) {
      this.append(value);
      return true;
    }

    const newNode = new DoublyNode(value);
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;
    return true;
  }

  // Remove at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) return null;

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      if (removedNode === this.tail) this.tail = null;
    } else if (index === this.size - 1) {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      removedNode = current;
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.size--;
    return removedNode.value;
  }

  // Search for a value (returns index or -1)
  indexOf(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  // Print list forward
  printForward() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }

  // Print list backward
  printBackward() {
    let current = this.tail;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    console.log(result.join(" <-> "));
  }

  // Check if empty
  isEmpty() {
    return this.size === 0;
  }

  // Get size
  getSize() {
    return this.size;
  }
}

class DoublyNode {
  constructor(value) {
    this.value = value; 
    this.next = null;
    this.prev = null;
  }
}

const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.prepend(5);
dll.insertAt(15, 2);
dll.printForward();
dll.printBackward();
console.log(dll.indexOf(15));
dll.removeAt(2);
dll.printForward();
console.log(dll.getSize());
console.log(dll.isEmpty());
dll.removeAt(0);
dll.printForward();
console.log(dll.getSize());
console.log(dll.isEmpty());

