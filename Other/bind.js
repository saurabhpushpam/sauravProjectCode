const person = {
  name: "Alice",
  greet: function(city) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}.`);
  }
};

const anotherPerson = { name: "Bob" };

// Using bind() to create a new function with `this` set
const greetBob = person.greet.bind(anotherPerson);

greetBob("Paris"); 
// Output: Hello, my name is Bob and I live in Paris.




function multiply(a, b) {
  return a * b;
}

// Bind first argument to 2
const double = multiply.bind(null, 2);

console.log(double(5)); // 10
console.log(double(10)); // 20
