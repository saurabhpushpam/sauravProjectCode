// Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array.

var largestElementInArray = (array) => {
  if (array.length === 0) return "Array is empty"; // Handle empty array

  let largestElement = array[0]; // Initialize with the first element of the array
  for (let i = 1; i < array.length; i++) {
    // Start from the second element
    if (largestElement < array[i]) {
      largestElement = array[i]; // Update largestElement if a larger value is found
    }
  }
  return largestElement;
};

console.log(largestElementInArray([100, 20, 300]));
console.log(largestElementInArray([-10, -20, -3]));
console.log(largestElementInArray([]));


// Using Reduce method for more efficiency ...........................................

var largestElementInArray = (array) => {
    if (array.length === 0) return "Array is empty"; // Handle empty array

    return array.reduce((max, current) => (current > max ? current : max));
};

console.log(largestElementInArray([100, 20, 300]));  // Outputs: 300
console.log(largestElementInArray([-10, -20, -3]));  // Outputs: -3
console.log(largestElementInArray([]));             // Outputs: "Array is empty"

