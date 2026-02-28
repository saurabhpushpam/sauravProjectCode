// ======== Creating a new WeakMap ========
const myWeakMap = new WeakMap();

console.log('Created a new WeakMap');

// ======== Creating some objects to use as keys ========
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

// ======== Adding entries with .set(key, value) ========
myWeakMap.set(obj1, 'Value for obj1');
myWeakMap.set(obj2, { description: 'Value as an object for obj2' });

console.log('Added obj1 and obj2 as keys');

// ======== Trying to set a primitive key throws an error ========
try {
  myWeakMap.set('primitiveKey', 'This will fail');
} catch (e) {
  console.log('Error setting primitive as key:', e.message);
}

// ======== Retrieving values with .get(key) ========
console.log('Value for obj1:', myWeakMap.get(obj1)); // Value for obj1
console.log('Value for obj2:', myWeakMap.get(obj2)); // { description: 'Value as an object for obj2' }
console.log('Value for obj3:', myWeakMap.get(obj3)); // undefined (obj3 not in map)

// ======== Checking if a key exists with .has(key) ========
console.log('Has obj1?', myWeakMap.has(obj1)); // true
console.log('Has obj3?', myWeakMap.has(obj3)); // false

// ======== Deleting entries with .delete(key) ========
myWeakMap.delete(obj2);
console.log('Deleted obj2');
console.log('Has obj2?', myWeakMap.has(obj2)); // false

// ======== WeakMap does NOT support iteration or size property ========
console.log('WeakMap size:', myWeakMap.size); // undefined

// The following lines would throw errors if uncommented:
// for (const [key, value] of myWeakMap) { console.log(key, value); }
// myWeakMap.forEach((value, key) => console.log(key, value));

// ======== Garbage Collection Behavior ========
// If obj1 has no other references except in the WeakMap,
// it can be garbage collected eventually.

// ======== Summary ========
// WeakMap keys must be objects,
// keys are held weakly (no interference with GC),
// no iteration methods, no size property.
