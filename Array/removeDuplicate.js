function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  // Optional: trim array to contain only unique elements
  nums.length = i + 1;
  return nums;
}

// Example usage
let arr = [1, 1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4]




let arr1 = [1, 1, 2, 2, 3, 4, 4, 5];

let result = [arr1[0]];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] !== arr1[i - 1]) {
    result.push(arr1[i]);
  }
}

console.log(result);




// Write a JavaScript function that takes an array as input and returns a new array with all duplicate elements removed.

var removeDuplicates = (array) => {
    return [...new Set(array)]; // Convert array to Set and back to array
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));  
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); 
console.log(removeDuplicates([])); 

// By using filter() ..............................

var removeDuplicates = (array) => {
    return array.filter((value, index) => array.indexOf(value) === index);
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); 
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); 
console.log(removeDuplicates([])); 


// By using for loop ......................................

var removeDuplicates = (array) => {
    const uniqueArray = []; // Initialize an empty array to store unique elements

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]); // Add element only if it doesn't already exist
        }
    }

    return uniqueArray;
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));  
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); 
console.log(removeDuplicates([]));  


// practice :


 let arr= [1, 2, 3, 4, 5, 3, 2];
 let newarr =[];
 for(let i= 0; i< arr.length; i++){
  if (!newarr.includes(arr[i])){
   newarr.push(arr[i]);
 }
 }
 console.log(newarr);
