function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example:
console.log(insertionSort([12, 11, 13, 5, 6]));
// Output: [5, 6, 11, 12, 13]

console.log(insertionSort([31, 41, 59, 26, 41, 58]));
// Output: [26, 31, 41, 41, 58, 59]

