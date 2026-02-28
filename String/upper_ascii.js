const str= 'Hello World';
console.log(str.toUpperCase());

const lowerStr= 'Hello World';
console.log(lowerStr.toLowerCase());

// Using ASCII values to convert to uppercase
// function toUpperAscii(s) {
//     let result = '';    
//     for (let i = 0; i < s.length; i++) {
//         const code = s.charCodeAt(i);
//         if (code >= 97 && code <= 122) { // a-z
//             result += String.fromCharCode(code - 32); // Convert to A-Z
//         }
//         else {
//             result += s[i]; // Non-lowercase characters remain unchanged
//         }
//     }
//     return result;
// }

 for(let i=0; i<str.length; i++){
    console.log(str.charCodeAt(i));
 }