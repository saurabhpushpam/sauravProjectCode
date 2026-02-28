const person = {
  name: "Alice",
  greet: function(city) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}.`);
  }
};

const anotherPerson = { name: "Bob" };

// Normally, greet uses person.name
person.greet("London"); 
// Output: Hello, my name is Alice and I live in London.

// Using call() to change this to anotherPerson
person.greet.call(anotherPerson, "Paris"); 
// Output: Hello, my name is Bob and I live in Paris.
