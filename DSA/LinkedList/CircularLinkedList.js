class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node at the end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // circular link
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // maintain circularity
    }

    this.size++;
  }

  // Add a node at the beginning
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // circular link
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // maintain circularity
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

    const newNode = new Node(value);
    let current = this.head;
    let i = 0;

    while (i < index - 1) {
      current = current.next;
      i++;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    return true;
  }

  // Remove at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) return null;

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
    } else {
      let current = this.head;
      let i = 0;

      while (i < index - 1) {
        current = current.next;
        i++;
      }

      removedNode = current.next;
      current.next = current.next.next;

      if (removedNode === this.tail) {
        this.tail = current;
      }
    }

    this.size--;
    return removedNode.value;
  }

  // Search for a value (returns index or -1)
  indexOf(value) {
    if (!this.head) return -1;

    let current = this.head;
    let index = 0;

    do {
      if (current.value === value) return index;
      current = current.next;
      index++;
    } while (current !== this.head);

    return -1;
  }

  // Print list
  print() {
    if (!this.head) return console.log("List is empty");

    let current = this.head;
    let result = [];

    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> ") + " -> (head)");
  }

  isEmpty() {
    return this.size === 0;
  }

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
const circularList = new CircularLinkedList();
circularList.append(10);
circularList.append(20);
circularList.prepend(5);
circularList.insertAt(15, 2);
circularList.print();
console.log("Index of 15:", circularList.indexOf(15));
console.log("Removed at index 2:", circularList.removeAt(2));
circularList.print();
console.log("Is empty:", circularList.isEmpty());
console.log("Size of list:", circularList.getSize());
console.log("Removed at index 0:", circularList.removeAt(0));
circularList.print();
console.log("Size of list:", circularList.getSize());
console.log("Is empty:", circularList.isEmpty());
console.log("Removed at index 0:", circularList.removeAt(0));
circularList.print();
console.log("Removed at index 0:", circularList.removeAt(0));
circularList.print();
console.log("Is empty:", circularList.isEmpty());
console.log("Size of list:", circularList.getSize());
console.log("Attempt to remove from empty list:", circularList.removeAt(0));
console.log("Attempt to insert into empty list at index 1:", circularList.insertAt(25, 1)); // false
circularList.insertAt(25, 0); // true
circularList.print();   
console.log("Size of list:", circularList.getSize());
console.log("Is empty:", circularList.isEmpty());
console.log("Index of 25:", circularList.indexOf(25));
console.log("Index of 100 (not in list):", circularList.indexOf(100));

