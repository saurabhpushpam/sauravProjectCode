
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node at the end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  // Add a node at the beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.size) return false;

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = newNode;
    newNode.next = current;
    this.size++;
    return true;
  }

  // Remove at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) return null;

    let removedNode = null;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      removedNode = current;
      previous.next = current.next;
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

  // Print all elements
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
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



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2);
list.print();
console.log("Index of 15:", list.indexOf(15));
console.log("Removed at index 2:", list.removeAt(2));
list.print();
console.log("Size of list:", list.getSize());
console.log("Is list empty?", list.isEmpty());
console.log("Removed at index 0:", list.removeAt(0));
list.print();
console.log("Size of list:", list.getSize());
console.log("Is list empty?", list.isEmpty());
console.log("Removed at index 0:", list.removeAt(0));
list.print();
console.log("Size of list:", list.getSize());
console.log("Is list empty?", list.isEmpty());


list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 -> 20 -> 30

list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> 30

list.insertAt(15, 2);
list.print(); // 5 -> 10 -> 15 -> 20 -> 30

console.log(list.removeAt(3)); // 20
list.print(); // 5 -> 10 -> 15 -> 30

console.log(list.indexOf(15)); // 2
console.log(list.getSize());   // 4
