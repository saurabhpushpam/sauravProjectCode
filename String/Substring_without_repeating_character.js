// Longest substring without repeating characters (sliding window)

function longestSubstringWithoutRepeating(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  let result = "";

  for (let right = 0; right < s.length; right++) {
    // agar duplicate mila to left ko move karo
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    // max update karo
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      result = s.substring(left, right + 1);
    }
  }

  return {
    length: maxLength,
    substring: result
  };
}


console.log(longestSubstringWithoutRepeating("abcabcbb"));


// {  "length": 3,  "substring": "abc" }


