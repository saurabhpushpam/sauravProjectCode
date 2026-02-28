// Write a JavaScript function to find the union of two arrays. The union should contain all unique elements from both arrays.

var UnionofTwoArrays = (array1, array2) => {
  return [...new Set(array1.concat(array2))];
};

console.log(UnionofTwoArrays([1, 2, 3, 4, 5], [4, 5, 6, 7, 8, 9]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Another Method :

var UnionofTwoArrays = (array1, array2) => {
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  // Combine both sets
  return [...new Set([...set1, ...set2])];
};

console.log(UnionofTwoArrays([1, 2, 3, 4, 5], [4, 5, 6, 7, 8, 9]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]