// ======== Creating a new Set ========
const mySet = new Set();

console.log('Initial size:', mySet.size); // 0

// ======== Adding values with .add(value) ========
mySet.add(1);
mySet.add(5);
mySet.add('hello');
mySet.add(true);

// Adding duplicate values has no effect
mySet.add(5);
mySet.add('hello');

console.log(mySet);
console.log('Size after adding duplicates:', mySet.size); // 4

// ======== Checking if a value exists with .has(value) ========
console.log('Has 1?', mySet.has(1));       // true
console.log('Has 10?', mySet.has(10));     // false
console.log('Has "hello"?', mySet.has('hello')); // true

// ======== Deleting a value with .delete(value) ========
mySet.delete(5);
console.log('Has 5 after delete?', mySet.has(5)); // false
console.log('Size after delete:', mySet.size);    // 3

// ======== Iterating over values ========
console.log('Set values:');
for (const value of mySet.values()) {
  console.log(value);
}

// ======== Using forEach to iterate ========
console.log('forEach iteration:');
mySet.forEach(value => {
  console.log(value);
});

// ======== Clearing the set ========
mySet.clear();
console.log('Size after clear:', mySet.size); // 0

// ======== Working with objects and functions as values ========
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const func1 = () => 'func1';
const func2 = () => 'func2';

const complexSet = new Set();

complexSet.add(obj1);
complexSet.add(obj2);
complexSet.add(func1);
complexSet.add(func2);

console.log('Size after adding objects and functions:', complexSet.size); // 4

// Adding "identical" but different objects/functions creates new entries
complexSet.add({ id: 1 });  // Different object, added
complexSet.add(() => 'func1'); // Different function, added

console.log('Size after adding similar but different objects/functions:', complexSet.size); // 6

// Checking if set has specific objects/functions (by reference)
console.log('Has obj1?', complexSet.has(obj1)); // true
console.log('Has new object {id:1}?', complexSet.has({ id: 1 })); // false

// ======== Iterating over complexSet values ========
console.log('Complex set values:');
for (const value of complexSet) {
  console.log(value);
}
