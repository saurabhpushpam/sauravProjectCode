// Sliding Window technique tab use hoti hai jab hume **array ya string ke continuous subarray / substring** par kaam karna ho. Isse **nested loops avoid hote hain** aur time complexity usually **O(n)** ho jaati hai. 🚀

// ## Simple Example (JS)

// **Problem:**
// Array me se **size k ka maximum sum subarray** find karo.

// Example:
// `arr = [2, 1, 5, 1, 3, 2]`, `k = 3`
// Output: `9` (subarray `[5,1,3]`)

// ### JavaScript Code (Sliding Window)

// ```javascript
// function maxSumSubarray(arr, k) {
//   let windowSum = 0;
//   let maxSum = 0;

//   // first window
//   for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
//   }

//   maxSum = windowSum;

//   // slide the window
//   for (let i = k; i < arr.length; i++) {
//     windowSum += arr[i];      // add next element
//     windowSum -= arr[i - k];  // remove first element of window

//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }

// const arr = [2, 1, 5, 1, 3, 2];
// const k = 3;

// console.log(maxSumSubarray(arr, k)); // 9
// ```

// ### Sliding Window ka Idea 👇

// Window size `k = 3`

// ```
// [2,1,5]  -> sum = 8
//    [1,5,1] -> sum = 7
//       [5,1,3] -> sum = 9 (max)
//          [1,3,2] -> sum = 6
// ```

// Instead of **har baar 3 elements dubara sum karne ke**, hum:

// * **next element add** karte hain
// * **previous window ka first element subtract** karte hain

// Isliye fast ho jata hai. ⚡

// ---

// ✅ Agar chaho to main **Sliding Window ka most famous interview question** bhi dikha sakta hoon:

// * **Longest substring without repeating characters (LeetCode)**
// * **Minimum window substring**
// * **Variable size sliding window**

// Ye thoda aur powerful concept samjhata hai.



function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];      // add next element
    windowSum -= arr[i - k];  // remove first element of window

    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

console.log(maxSumSubarray(arr, k)); // 9
