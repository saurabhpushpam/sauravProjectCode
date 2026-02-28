// Find the length of the longest substring without repeating characters in a string.


function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  let start = 0; // To track start of substring

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    if (set.size > maxLength) {
      maxLength = set.size;
      start = left;
    }
  }

  // Extract the substring itself
  let substring = s.slice(start, start + maxLength);

  return { length: maxLength, substring: substring };
}

// Example usage:
let str = "abcabcbb";
let result = longestUniqueSubstring(str);
console.log(result); 
// { length: 3, substring: 'abc' }
