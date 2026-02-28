// Write a JavaScript function that takes an array of numbers as input and returns the second largest number. If the array has less than two unique numbers, return an appropriate message.

// Using sort() ...................................

var secondLargestNumberInArray = (array) => {
    if (array.length < 2) return "Array must have at least two unique numbers";

    // Remove duplicates by converting to a Set and back to an array
    const uniqueArray = [...new Set(array)];

    if (uniqueArray.length < 2) return "Array must have at least two unique numbers";

    // Sort the array in descending order
    uniqueArray.sort((a, b) => b - a);

    // Return the second element
    return uniqueArray[1];
};

console.log(secondLargestNumberInArray([1, 2, 6, 4, 5]));    
console.log(secondLargestNumberInArray([6, 6, 6, 6]));    
console.log(secondLargestNumberInArray([5]));             
console.log(secondLargestNumberInArray([]));              
    
  
// Using loop .................................   
  
var secondLargestNumberInArray = (array) => {
    if (array.length < 2) return "Array must have at least two unique numbers";

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of array) {
        if (num > largest) {
            secondLargest = largest; // Update second largest
            largest = num; // Update largest
        } else if (num > secondLargest && num < largest) {
            secondLargest = num; // Update second largest
        }
    }

    return secondLargest === -Infinity
        ? "Array must have at least two unique numbers"
        : secondLargest;
};

console.log(secondLargestNumberInArray([1, 2, 6, 4, 5])); 
console.log(secondLargestNumberInArray([6, 6, 6, 6]));    
console.log(secondLargestNumberInArray([5]));
console.log(secondLargestNumberInArray([])); 


