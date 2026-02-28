//   deep clone without using JSON.parse(JSON.stringify())

function deepClone(obj) {
  // Handle null or primitive types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  // Handle Object
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}


const original = {
  name: "Alice",
  age: 25,
  address: {
    city: "London",
    zip: 12345
  },
  hobbies: ["reading", "coding"],
  birthDate: new Date("2000-01-01")
};

const copy = deepClone(original);

copy.address.city = "Paris";
copy.hobbies.push("gaming");

console.log(original.address.city); // "London" → unchanged
console.log(original.hobbies);      // ["reading","coding"] → unchanged
console.log(copy.birthDate instanceof Date); // true
