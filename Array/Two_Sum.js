// Given an array nums and a target, return indices of two numbers such that they add up to target.


nums = [2, 3, 7, 11, 15, 3, 6]
target = 9


function twoSum(nums, target) {
  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map.has(needed)) {
      return [map.get(needed), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum(nums, target)); // [0, 1]