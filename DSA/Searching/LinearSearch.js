function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // return index if found
    }
  }
  return -1; // not found
}

// Example usage:
const arr1 = [10, 20, 30, 40, 50];
console.log(linearSearch(arr1, 30)); // 2
console.log(linearSearch(arr1, 60)); // -1

const arr2 = ['apple', 'banana', 'cherry', 'date'];
console.log(linearSearch(arr2, 'cherry')); // 2
console.log(linearSearch(arr2, 'fig')); // -1