let str= 'AAAAAAssddffgghhjjkkllzzxxccvvbbnnmmtk';




function firstNonRepeatingChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return null; // If all characters repeat
}

console.log(firstNonRepeatingChar(str));



function firstRepeatingChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) != s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return null; // If all characters repeat
}

console.log(firstRepeatingChar(str));