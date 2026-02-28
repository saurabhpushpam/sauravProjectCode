//  Convert an object into an array of key-value pairs

const obj = { a: 1, b: 2, c: 3 };

const keyValueArray = Object.entries(obj);

console.log(keyValueArray);
// Output: [['a', 1], ['b', 2], ['c', 3]]

//  Object.entries(obj) returns an array of [key, value] pairs.



//  Convert an array of key-value pairs back into an object

const arr = [['a', 1], ['b', 2], ['c', 3]];

const newObj = Object.fromEntries(arr);

console.log(newObj);
// Output: { a: 1, b: 2, c: 3 }

//  Object.fromEntries(arr) converts an array of [key, value] back into an object.







// Combine Both (Round-trip)
const original = { x: 10, y: 20 };

const arr1 = Object.entries(original);   // Object → Array
const obj1 = Object.fromEntries(arr);    // Array → Object

console.log(arr1); // [['x', 10], ['y', 20]]
console.log(obj1); // { x: 10, y: 20 }
