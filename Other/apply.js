const person = {
  name: "Alice",
  greet: function(city, country) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}, ${country}.`);
  }
};

const anotherPerson = { name: "Bob" };

// Normally
person.greet("London", "UK"); 
// Output: Hello, my name is Alice and I live in London, UK.

// Using apply() to change this to anotherPerson
person.greet.apply(anotherPerson, ["Paris", "France"]); 
// Output: Hello, my name is Bob and I live in Paris, France.



// Example:

// // Using call
// person.greet.call(anotherPerson, "Paris", "France");

// // Using apply
// person.greet.apply(anotherPerson, ["Paris", "France"]);


// Both produce the same output, just different ways of passing arguments.

