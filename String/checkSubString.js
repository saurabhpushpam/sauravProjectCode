// Write a JavaScript function to check if a string is a subsequence of another string.
// A string is considered a subsequence if you can derive it by deleting some or no characters from the original string without changing the order of the remaining characters.

const isSubsequence = (subStr, str) => {
  let i = 0; // Pointer for subStr
  let j = 0; // Pointer for str

  while (i < subStr.length && j < str.length) {
    if (subStr[i] === str[j]) {
      i++; // Move subStr pointer if characters match
    }
    j++; // Always move str pointer
  }

  return i === subStr.length; // If i reaches subStr's length, it's a subsequence
};

console.log(isSubsequence("abc", "abcdefgh")); // Output: true
console.log(isSubsequence("axc", "ahbgdc")); // Output: false