// Sort Object by Values

const obj = {
  a: 3,
  b: 1,
  c: 2
};

// Step 1: Convert object entries to array
const entries = Object.entries(obj);

// Step 2: Sort the array by value
entries.sort(([, valueA], [, valueB]) => valueA - valueB);

// Step 3: Convert back to object
const sortedObj = Object.fromEntries(entries);

console.log(sortedObj);
// Output: { b: 1, c: 2, a: 3 }



// Explanation:How it works:

// Object.entries(obj) → [['a',3], ['b',1], ['c',2]]

// sort(([,v1],[,v2]) => v1 - v2) → sort by value

// Object.fromEntries() → convert the sorted array back to an object