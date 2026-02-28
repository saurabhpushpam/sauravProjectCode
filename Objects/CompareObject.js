function deepEqual(obj1, obj2) {
  // If both are strictly equal, return true
  if (obj1 === obj2) return true;

  // If either is null or not an object, return false
  if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  // Handle arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  } else if (Array.isArray(obj1) || Array.isArray(obj2)) {
    // One is array, the other is not
    return false;
  }

  // Compare object keys length
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  // Compare each key recursively
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}


const obj1 = {
  name: "Alice",
  age: 25,
  address: {
    city: "London",
    zip: 12345
  },
  hobbies: ["reading", "coding"]
};

const obj2 = {
  name: "Alice",
  age: 25,
  address: {
    city: "London",
    zip: 12345
  },
  hobbies: ["reading", "coding"]
};

console.log(deepEqual(obj1, obj2)); // true

obj2.address.city = "Paris";
console.log(deepEqual(obj1, obj2)); // false
