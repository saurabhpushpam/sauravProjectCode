//Write a JavaScript function that takes a positive integer as input and returns its factorial.

const factorial = (num) => {
    if (num < 0) return 'Enter a positive number';
    if (num === 0 || num === 1) return 1;  // Base cases for 0! and 1!
    
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;  // Multiply fact by each number up to num
    }
    return fact;
};

console.log(factorial(6));  // Outputs: 720