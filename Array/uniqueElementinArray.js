// Write a JavaScript function to return all unique elements from an array (i.e., elements that appear only once).

// Using a Loop with an Object:

var findUniqueElements = (array) => {
  const frequency = {};
  const result = [];

  // Count the frequency of each element
  for (let i = 0; i < array.length; i++) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1;
  }

  // Push elements with a frequency of 1 to the result array
  for (let key in frequency) {
    if (frequency[key] === 1) {
      result.push(isNaN(key) ? key : +key); // Convert numeric keys back to numbers
    }
  }

  return result;
};

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]
console.log(
  findUniqueElements(["apple", "banana", "apple", "kiwi", "kiwi", "grape"])
);
// Output: ["banana", "grape"]

// Using filter and indexOf:

var findUniqueElements = (array) => {
  return array.filter(
    (item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item)
  );
};

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]
console.log(
  findUniqueElements(["apple", "banana", "apple", "kiwi", "kiwi", "grape"])
);
// Output: ["banana", "grape"]