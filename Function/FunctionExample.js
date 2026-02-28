// ======== 1. Function Declaration ========
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice'));  // Hello, Alice!

// ======== 2. Function Expression ========
const add = function(x, y) {
  return x + y;
};
console.log(add(3, 4));  // 7

// ======== 3. Arrow Functions ========
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));  // 30

const square = x => x * x;
console.log(square(7));  // 49

// ======== 4. Default Parameters ========
function say(message = 'Hello', name = 'Guest') {
  return `${message}, ${name}!`;
}
console.log(say()); // Hello, Guest!
console.log(say('Hi', 'Bob')); // Hi, Bob!

// ======== 5. Rest Parameters ========
function sumAll(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10)); // 15

// ======== 6. Immediately Invoked Function Expression (IIFE) ========
(function() {
  console.log('IIFE executed immediately!');
})();

// ======== 7. Higher-Order Functions ========
// Function that takes a function as argument
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, (i) => console.log(`Action executed ${i} times`));

// ======== 8. Constructor Function ========
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.describe = function() {
    return `${this.name} is ${this.age} years old.`;
  };
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log(person1.describe());  // John is 30 years old.
console.log(person2.describe());  // Jane is 25 years old.

// ======== 9. Callback Function ========
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, message: 'Hello from server!' };
    callback(data);
  }, 1000);
}

fetchData(function(result) {
  console.log('Callback received:', result);
});

// ======== 10. Callback Hell (Nested Callbacks) ========
function doStep1(value, callback) {
  setTimeout(() => {
    console.log('Step 1:', value);
    callback(value + 1);
  }, 500);
}

function doStep2(value, callback) {
  setTimeout(() => {
    console.log('Step 2:', value);
    callback(value + 1);
  }, 500);
}

function doStep3(value, callback) {
  setTimeout(() => {
    console.log('Step 3:', value);
    callback(value + 1);
  }, 500);
}

// Nested callbacks (callback hell)
doStep1(0, function(result1) {
  doStep2(result1, function(result2) {
    doStep3(result2, function(result3) {
      console.log('Final result:', result3);
    });
  });
});

// ======== 11. Named functions to flatten callback hell ========
doStep1(0, function step1Callback(result1) {
  doStep2(result1, function step2Callback(result2) {
    doStep3(result2, function step3Callback(result3) {
      console.log('Final result (flattened):', result3);
    });
  });
});

// ======== 12. Closures ========
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// ======== 13. Recursive Function ========
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5)); // 120
