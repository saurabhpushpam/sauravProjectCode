// Return true if any two numbers sum to target.

function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }

  return false;
}
console.log(twoSumSorted([1, 2, 3, 5, 6], 6)); // true
console.log(twoSumSorted([2, 5, 9, 11], 11)); // true