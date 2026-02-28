let str= 'abcdefgh';
let vowels= 0;
for(let i=0; i<str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        vowels++;
    }
}
console.log(vowels);


function countVowelsAndConsonants(str) {
  let vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) { // Check if it's a letter
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

// Example
let text = "Hello World";
let result = countVowelsAndConsonants(text);
console.log(result); // { vowels: 3, consonants: 7 }
