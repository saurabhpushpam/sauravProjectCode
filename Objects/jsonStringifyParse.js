//  Convert an Object to JSON String

const obj = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"],
  address: { city: "London", zip: 12345 }
};

// Convert object to JSON string
const jsonString = JSON.stringify(obj);

console.log(jsonString);
/*
Output (string):
'{"name":"Alice","age":25,"hobbies":["reading","coding"],"address":{"city":"London","zip":12345}}'
*/




//  Convert JSON String Back to Object

const parsedObj = JSON.parse(jsonString);

console.log(parsedObj);
/*
Output (object):
{
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"],
  address: { city: "London", zip: 12345 }
}
*/

console.log(parsedObj.name); // "Alice"
console.log(parsedObj.hobbies[1]); // "coding"



//  round-trip

const user = { id: 1, name: "Bob", active: true };

// Object → JSON string
const jsonStr = JSON.stringify(user);
console.log(jsonStr); // '{"id":1,"name":"Bob","active":true}'

// JSON string → Object
const newUser = JSON.parse(jsonStr);
console.log(newUser); // { id: 1, name: 'Bob', active: true }
