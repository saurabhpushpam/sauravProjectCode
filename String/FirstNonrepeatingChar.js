// Write a JavaScript function to find the first character in a string that does not repeat.

//Using a Loop (Efficient Approach):

var firstNonRepeatingChar = (str) => {
  const charCount = {}; // Object to store character frequencies

  // Count the frequency of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
};

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("success")); // Output: "u"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null

// Using String Methods (Simpler but Less Efficient):

var firstNonRepeatingChar = (str) => {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char; // Return the first non-repeating character
    }
  }
  return null; // No non-repeating character found
};

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("success")); // Output: "u"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null