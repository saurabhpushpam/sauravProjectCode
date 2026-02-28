
// Write a JavaScript function to find the longest common prefix among an array of strings. If there is no common prefix, return an empty string.

const longestCommonPrefix = (strs) => {
  if (!strs.length) return ""; // If the array is empty, return an empty string

  let prefix = strs[0]; // Start with the first string as the prefix

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Trim the prefix if it's not a prefix of the current string
      prefix = prefix.slice(0, -1);
      if (prefix === "") return ""; // No common prefix found
    }
  }

  return prefix; // Return the longest common prefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["interview", "internet", "interval"])); // Output: "inte"
