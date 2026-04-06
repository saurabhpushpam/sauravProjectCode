function countMatchingSubsequences(s, words) {
  let count = 0;

  for (let word of words) {
    if (isSubsequence(word, s)) {
      count++;
    }
  }

  return count;
}

// helper function to check if word is subsequence of s
function isSubsequence(word, s) {
  let i = 0; // pointer for s
  for (let char of word) {
    i = s.indexOf(char, i); // find char in s starting from index i
    if (i === -1) return false;
    i++; // move pointer forward
  }
  return true;
}

// Example
const s = "abcde";
const words = ["a", "bb", "acd", "ace", "acb"];

console.log(countMatchingSubsequences(s, words)); // 3



















// optimized :

// function countMatchingSubsequencesOptimized(s, words) {
//   const buckets = Array.from({ length: 26 }, () => []); // a-z buckets

//   // initialize buckets with word iterators
//   for (let word of words) {
//     const firstChar = word[0];
//     buckets[firstChar.charCodeAt(0) - 97].push({ word, index: 0 });
//   }

//   let count = 0;

//   for (let char of s) {
//     const bucketIndex = char.charCodeAt(0) - 97;
//     const currentBucket = buckets[bucketIndex];
//     buckets[bucketIndex] = []; // reset bucket for this char

//     for (let obj of currentBucket) {
//       obj.index++; // move pointer
//       if (obj.index === obj.word.length) {
//         count++; // fully matched
//       } else {
//         const nextChar = obj.word[obj.index];
//         buckets[nextChar.charCodeAt(0) - 97].push(obj);
//       }
//     }
//   }

//   return count;
// }

// // Example
// const s = "abcde";
// const words = ["a", "bb", "acd", "ace", "acb"];

// console.log(countMatchingSubsequencesOptimized(s, words)); // 3