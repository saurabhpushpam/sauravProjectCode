// 🟢 PART 1: ARRAY QUESTIONS (1–25)

// 1. Array reverse karo bina built-in method ke

let arr = [1,2,3,4];
let result = [];

for(let i = arr.length - 1; i >= 0; i--){
    result.push(arr[i]);
}

console.log(result);



// 2. Array me largest number find karo

// let arr = [10, 45, 2, 99, 23];
// let max = arr[0];

// for(let num of arr){
//     if(num > max){
//         max = num;
//     }
// }

// console.log(max);


// 3. Second largest number find karo


// let arr = [10, 20, 30, 40];
// let first = -Infinity;
// let second = -Infinity;

// for(let num of arr){
//     if(num > first){
//         second = first;
//         first = num;
//     } else if(num > second && num !== first){
//         second = num;
//     }
// }

// console.log(second);


// 4. Duplicate elements find karo


let arr = [1,2,2,3,4,4];
let duplicates = arr.filter((item, index) =>
    arr.indexOf(item) !== index
);

console.log(duplicates);

// 5. Remove duplicates from array

let arr = [1,2,2,3,4,4];
let unique = [...new Set(arr)];

console.log(unique);



// 6. Array sum find karo


let arr = [1,2,3,4];
let sum = arr.reduce((a,b) => a+b, 0);

console.log(sum);


// 7. Missing number find karo

Example: [1,2,4,5]

let arr = [1,2,4,5];
let n = 5;
let total = n * (n + 1) / 2;
let sum = arr.reduce((a,b)=>a+b,0);

console.log(total - sum);



// 8. Array sort ascending


let arr = [5,2,8,1];

arr.sort((a,b)=>a-b);

console.log(arr);


// 9. Merge two arrays


let a = [1,2];
let b = [3,4];

let result = [...a, ...b];

console.log(result);



// 10. Array flatten karo


let arr = [1,[2,[3,4]]];

console.log(arr.flat(Infinity));


// 11. Find even numbers


let arr = [1,2,3,4,5,6];

let even = arr.filter(num => num % 2 === 0);

console.log(even);


// 12. Find odd numbers


let odd = arr.filter(num => num % 2 !== 0);


// 13. Count frequency of elements


let arr = [1,2,2,3,3,3];
let freq = {};

for(let num of arr){
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);


// 14. Rotate array by 1


let arr = [1,2,3,4];

arr.unshift(arr.pop());

console.log(arr);


// 15. Check array is palindrome

let arr = [1,2,3,2,1];

let isPalindrome = arr.join('') === [...arr].reverse().join('');

console.log(isPalindrome);

// 16. Find intersection of arrays
// 17. Find union of arrays
// 18. Find common elements
// 19. Find pair with given sum
// 20. Move zeros to end
// 21. Maximum subarray sum
// 22. Kadane’s Algorithm
// 23. Two sum problem
// 24. Product of array except self
// 25. Spiral matrix basics



// 🟡 PART 2: STRING QUESTIONS (26–45)

// 26. String reverse karo

let str = "hello";

let rev = str.split('').reverse().join('');

console.log(rev);

// 27. Check palindrome string

let str = "madam";

let isPalindrome = str === str.split('').reverse().join('');

console.log(isPalindrome);

// 28. Count vowels

let str = "javascript";
let count = 0;

for(let ch of str){
    if("aeiou".includes(ch)){
        count++;
    }
}

console.log(count);

// 29. Count consonants
// 30. Find duplicate characters
// 31. Remove duplicate characters
// 32. First non-repeating character
// 33. String anagram check
// 34. Capitalize first letter
// 35. Count words in sentence
// 36. Longest word in string
// 37. Replace spaces with hyphen
// 38. Check substring exists
// 39. Frequency of characters
// 40. Toggle case
// 41. Remove special characters
// 42. String compression basics
// 43. Find longest substring
// 44. Valid parentheses
// 45. Roman to integer basics


// 🔴 PART 3: LOGIC + PATTERN QUESTIONS (46–65)

// 46. Fibonacci series

let n = 10;
let a = 0, b = 1;

for(let i = 0; i < n; i++){
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

// 47. Factorial

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n - 1);
}

// 48. Prime number check

function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
    }
    return true;
}

// 49. Armstrong number
// 50. Swap two numbers
// 51. Number palindrome
// 52. Star pattern printing
// 53. Pyramid pattern
// 54. Inverted pyramid
// 55. Diamond pattern
// 56. FizzBuzz
// 57. Leap year check
// 58. GCD / HCF
// 59. LCM
// 60. Power of number
// 61. Decimal to binary
// 62. Binary to decimal
// 63. Sum of digits
// 64. Reverse number
// 65. Strong number basics


// 👉 Ye patterns pakad lo = selection HIGH 🔥

// Reverse
// Palindrome
// Duplicate
// Frequency
// Two Sum
// Sliding Window
// Recursion
// Pattern printing