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

var findPairss = (array, target) => {
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

console.log(findPairss([1, 2, 3, 4, 5], 6));
// Output: [[2, 4], [1, 5]]



function findPairsss(arr, target) {
  const set = new Set();
  const result = [];

  for (let num of arr) {
    const diff = target - num;

    if (set.has(diff)) {
      result.push([diff, num]);
    }

    set.add(num);
  }

  return result;
}

// Example
const arr = [1, 2, 4, 5];
console.log(findPairsss(arr, 6));


// All possible pairs without target sum condition

function allPairs(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }

  return result;
}

console.log(allPairs([1, 2, 4, 5]));