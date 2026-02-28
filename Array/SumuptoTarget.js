// Write a JavaScript function to find all unique pairs of numbers in an array that sum up to a given target value.

// Using Nested Loops :

var findPairs = (array, target) => {
  const pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  return pairs;
};

console.log(findPairs([1, 2, 3, 4, 5], 6));
// Output: [[1, 5], [2, 4]]

// Using a Set for Improved Efficiency:

var findPairs = (array, target) => {
  const seen = new Set();
  const pairs = [];

  for (let num of array) {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
};

console.log(findPairs([1, 2, 3, 4, 5], 6));
// Output: [[2, 4], [1, 5]]