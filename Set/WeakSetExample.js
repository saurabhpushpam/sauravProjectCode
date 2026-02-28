// ======== Creating a new WeakSet ========
const myWeakSet = new WeakSet();

console.log('Created a new WeakSet');

// ======== Adding objects with .add(obj) ========
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log('Added obj1 and obj2');

// ======== Trying to add a primitive throws an error ========
try {
  myWeakSet.add(123);  // Error: Invalid value used in weak set
} catch (e) {
  console.log('Error adding primitive:', e.message);
}

// ======== Checking if an object is in the WeakSet with .has(obj) ========
console.log('Has obj1?', myWeakSet.has(obj1)); // true
console.log('Has obj3?', myWeakSet.has(obj3)); // false

// ======== Deleting objects with .delete(obj) ========
myWeakSet.delete(obj2);
console.log('Deleted obj2');
console.log('Has obj2?', myWeakSet.has(obj2)); // false

// ======== WeakSet does NOT support iteration or size property ========
console.log('Does WeakSet support size?', myWeakSet.size); // undefined
// The following lines would throw errors if uncommented:
// for (const item of myWeakSet) { console.log(item); }
// myWeakSet.forEach((v) => console.log(v));

// ======== Garbage Collection Behavior (cannot be demonstrated directly) ========
// If obj1 and obj2 have no other references besides in the WeakSet,
// they will be garbage collected eventually.

// ======== Summary: WeakSet only stores objects, no primitives, no iteration ========
