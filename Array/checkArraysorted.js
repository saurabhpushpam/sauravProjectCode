// Write a JavaScript function to check whether a given array is sorted in ascending order, descending order, or not sorted at all.

// Using Loops (Efficient Approach):

var checkIfSorted = (array) => {
  let isAscending = true;
  let isDescending = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) isAscending = false;
    if (array[i] < array[i + 1]) isDescending = false;
  }

  if (isAscending) return "ascending";
  if (isDescending) return "descending";
  return "not sorted";
};

console.log(checkIfSorted([1, 2, 3, 4, 5])); // Output: "ascending"
console.log(checkIfSorted([5, 4, 3, 2, 1])); // Output: "descending"
console.log(checkIfSorted([3, 1, 4, 2])); // Output: "not sorted"

// Using slice and sort (Simpler but Less Efficient):

var newcheckIfSorted = (array) => {
  const ascending = [...array].sort((a, b) => a - b).toString();
  const descending = [...array].sort((a, b) => b - a).toString();

  if (array.toString() === ascending) return "ascending";
  if (array.toString() === descending) return "descending";
  return "not sorted";
};

console.log(newcheckIfSorted([1, 2, 3, 4, 5])); // Output: "ascending"
console.log(newcheckIfSorted([5, 4, 3, 2, 1])); // Output: "descending"
console.log(newcheckIfSorted([3, 1, 4, 2])); // Output: "not sorted"




// practice :
function checkascending(narr){
for(let i=0; i<narr.length-1; i++){
  if(narr[i]>narr[i+1]) return false;
}
return true;
}


function checkdesending(narr){
for(let i=0; i<narr.length-1; i++){
  if(narr[i]<narr[i+1]) return false;
}
return true;
}


console.log(checkascending([0, 1, 2, 4, 3, 6]));
console.log(checkascending([0, 1, 2, 4]));
console.log(checkdesending([2, 1, 0]));
console.log(checkdesending([2, 1, 0, 7, 8 , 9]));