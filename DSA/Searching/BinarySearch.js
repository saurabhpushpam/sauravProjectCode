function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // found
    } else if (arr[mid] < target) {
      left = mid + 1; // search right half
    } else {
      right = mid - 1; // search left half
    }
  }

  return -1; // not found
}

// Example usage (array must be sorted):
const arr2 = [5, 10, 15, 20, 25, 30];
console.log(binarySearch(arr2, 20)); // 3
console.log(binarySearch(arr2, 7));  // -1

const arr1 = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr1, 7)); // 3
console.log(binarySearch(arr1, 4)); // -1

