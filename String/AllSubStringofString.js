// Write a JavaScript function to generate all possible substrings of a given string.
const findSubstrings = (str) => {
  const resultStr = [];
  for (let i = 0; i < str.length; i++) {
    // Outer loop for starting point
    for (let j = i + 1; j <= str.length; j++) {
      // Inner loop for endpoint
      resultStr.push(str.substring(i, j));
    }
  }
  return resultStr;
};

console.log(findSubstrings("abc")); // Output: ["a", "ab", "abc", "b", "bc", "c"]
console.log(findSubstrings("abcde")); // Output: ["a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e"]