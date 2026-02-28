// "aaabbc" → "a3b2c1"


function compressString(str) {
  if (str.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

// Example usage:
let str = "aaabbc";
console.log(compressString(str)); // a3b2c1
