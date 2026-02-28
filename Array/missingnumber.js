let arr = [1, 2, 4, 5, 6]; // missing 3
let N = 6;

// sum of first N natural numbers
let total = (N * (N + 1)) / 2;

// sum of array elements
let sumArr = arr.reduce((acc, val) => acc + val, 0);

// missing number
let missing = total - sumArr;

console.log(missing);






let arr1 = [1, 2, 4, 5, 6];
let N1 = 6;

let missing1;

for (let i = 1; i <= N1; i++) {
  if (!arr1.includes(i)) {
    missing1 = i;
    break;
  }
}

console.log(missing1);



// Write a JavaScript function to find the missing number in an array of integers from 1 to n. The array will have n-1 integers, and all numbers will be unique.

// Optimized Solution Using Sum Formula ...................

var findMissingNumber = (array) => {
    const n = array.length + 1; // Total numbers expected in the range
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = array.reduce((sum, num) => sum + num, 0); // Sum of given array
    return expectedSum - actualSum; // Difference is the missing number
};

console.log(findMissingNumber([1, 6, 5, 7, 4, 2])); 
console.log(findMissingNumber([1, 2, 3, 5]));       
console.log(findMissingNumber([1, 2, 3, 4, 5]));    


// Using loop (if one number is missing).........................

var missingNumberInArray = (array) => {
    const uniqueArray = [...new Set(array)];
    const smallestNumber = Math.min(...array);
    const largestNumber = Math.max(...array);

    for (let i = smallestNumber; i <= largestNumber; i++) {
        if (!uniqueArray.includes(i)) return i;
    }

    return "No missing number"; // Return a message if no missing number
};

console.log(missingNumberInArray([1, 6, 5, 7, 4, 2])); 
console.log(missingNumberInArray([1, 2, 3, 5]));       
console.log(missingNumberInArray([1, 2, 3, 4, 5]));    


// Using loop (if two or more number is missing).........................

const findMissingNumbers = (array) => {
    const uniqueArray = [...new Set(array)];
    uniqueArray.sort((a, b) => a - b);  // Sort the unique array
    const smallestNumber = Math.min(...array);
    const largestNumber = Math.max(...array);

    let missingNumbers = [];

    for (let i = smallestNumber; i <= largestNumber; i++) {
        if (!uniqueArray.includes(i)) {
            missingNumbers.push(i);  // Collect missing numbers
        }
    }

    return missingNumbers.length > 0 ? missingNumbers : "No missing numbers";
};

console.log(findMissingNumbers([1, 6, 5, 7, 4, 2]));  
console.log(findMissingNumbers([1, 2, 4, 6, 7, 8]));  
console.log(findMissingNumbers([10, 11, 13, 15]));    