

function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countChar("hello world", "l")); // 3



function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("banana", "a")); // 3
