// ======== Creating a new Map ========
const myMap = new Map();

console.log('Initial size:', myMap.size); // 0

// ======== Adding entries with .set(key, value) ========
myMap.set('name', 'John');
myMap.set('age', 25);
myMap.set(true, 'boolean key example');
myMap.set(123, 'number key example');

// Objects and functions can be keys too
const objKey = { id: 1 };
const funcKey = function() { return 'I am a function'; };

myMap.set(objKey, 'Object as key');
myMap.set(funcKey, 'Function as key');

// ======== Retrieving values with .get(key) ========
console.log('Name:', myMap.get('name'));         // John
console.log('Age:', myMap.get('age'));           // 25
console.log('Boolean key:', myMap.get(true));    // boolean key example
console.log('Number key:', myMap.get(123));      // number key example
console.log('Object key:', myMap.get(objKey));   // Object as key
console.log('Function key:', myMap.get(funcKey));// Function as key

// If key does not exist, get returns undefined
console.log('Unknown key:', myMap.get('unknown')); // undefined

// ======== Checking if a key exists with .has(key) ========
console.log('Has "name"?', myMap.has('name'));     // true
console.log('Has objKey?', myMap.has(objKey));     // true
console.log('Has missing?', myMap.has('missing')); // false

// ======== Size of the Map ========
console.log('Map size:', myMap.size);  // 7

// ======== Updating a value ========
myMap.set('age', 26);  // Overwrites previous value
console.log('Updated age:', myMap.get('age'));  // 26

// ======== Deleting an entry ========
myMap.delete(true);
console.log('After deleting true key, has true?', myMap.has(true)); // false
console.log('Size after delete:', myMap.size); // 6

// ======== Iterating over keys ========
console.log('Keys:');
for (const key of myMap.keys()) {
  console.log(key);
}

// ======== Iterating over values ========
console.log('Values:');
for (const value of myMap.values()) {
  console.log(value);
}

// ======== Iterating over entries ========
console.log('Entries:');
for (const [key, value] of myMap.entries()) {
  console.log(key, '=>', value);
}

// ======== Using forEach method ========
console.log('forEach iteration:');
myMap.forEach((value, key) => {
  console.log(key, '=>', value);
});

// ======== Clearing the Map ========
myMap.clear();
console.log('Size after clear:', myMap.size);  // 0

// ======== Key uniqueness and reference types ========
// Primitive keys are compared by value:
const map2 = new Map();
map2.set('foo', 123);
map2.set('foo', 456); // overwrites previous value
console.log('Value for "foo":', map2.get('foo')); // 456

// Objects as keys are compared by reference:
const a = {};
const b = {};
map2.set(a, 'A object');
map2.set(b, 'B object');
console.log('Value for a:', map2.get(a)); // A object
console.log('Value for b:', map2.get(b)); // B object

// If you create a new but identical object, it's a different key
console.log('Value for new object {}:', map2.get({})); // undefined

// Functions as keys work similarly (by reference)
const f1 = () => {};
const f2 = () => {};
map2.set(f1, 'func 1');
console.log('Value for f1:', map2.get(f1)); // func 1
console.log('Value for f2:', map2.get(f2)); // undefined

