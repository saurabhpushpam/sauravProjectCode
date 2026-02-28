function cleanObject(obj) {
  const result = {};
  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}

// Example:
const obj = { a: 1, b: null, c: undefined, d: 4 };
console.log(cleanObject(obj)); 
// Output: { a: 1, d: 4 }
