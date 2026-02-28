function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("banana")); // ban



function removeDuplicates(str) {
  let result = "";

  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("hello")); // helo


function removeDuplicatesnew(str) {
  let seen = new Set();
  let result = "";

  for (let char of str.toLowerCase()) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}

removeDuplicatesnew("hello world");
// helo wrd
