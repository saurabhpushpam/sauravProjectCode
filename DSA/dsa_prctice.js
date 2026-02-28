// Question: Find the Maximum Element in an Array
// Input: [3, 7, 2, 9, 4]
// Output: 9

var array = [3, 7, 2, 9, 4];

function largestNumber(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (largest < array[i]) largest = array[i];
    }
    return largest;
}

console.log(largestNumber(array));


// ------------------------------------------------------------------
// Question: Find the Sum of All Elements in an Array
// Input: [3, 7, 2, 9, 4]
// Output: 25

var array = [3, 7, 2, 9, 4];

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray(array))

// ------------------------------------------------------------------
// Question: Reverse an Array (Without Using Built-in Methods)
// Input: [3, 7, 2, 9, 4]
// Output: [4, 9, 2, 7, 3]

var array = [3, 7, 2, 9, 4];

function reverseArray(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = temp;
    }
    return array;
}

console.log(reverseArray(array))

// ------------------------------------------------------------------
// Question: Find the Second Largest Number in an Array
// Input: [3, 7, 2, 9, 4]
// Output: 7

var array = [3, 7, 2, 9, 4];

function secondLargest(array) {
    let largest = -Infinity;
    let secondLargestNumber = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargestNumber = largest;
            largest = array[i];
        } else if (array[i] > secondLargestNumber && array[i] !== largest) {
            secondLargestNumber = array[i];
        }
    }
    return secondLargestNumber;
}

console.log(secondLargest(array))

// ------------------------------------------------------------------
// Question: Count the Number of Even Numbers in an Array
// Input: [3, 7, 2, 9, 4]
// Output: 2 (2 and 4 are even) 

var array = [3, 7, 2, 9, 4];

function evenCount(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) count++;
    }
    return count;
}

console.log(evenCount(array))

// ------------------------------------------------------------------
// Question: Check if an Array is Sorted in Ascending Order
// Input: [1, 2, 3, 4, 5]
// Output: true

var array = [1, 2, 3, 4, 5];

function checkSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(checkSort(array));

// ------------------------------------------------------------------
// Question: Remove All Duplicates from an Array (Using Only Basics)
// Input: [1, 2, 3, 2, 4, 1, 5]
// Output: [1, 2, 3, 4, 5]

var array = [1, 2, 3, 2, 4, 1, 5];

function removeDuplicates(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newArray.length; j++) {
            if (array[i] === newArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeDuplicates(array));

// ------------------------------------------------------------------

// Question: Find the First Non-Repeating Element in an Array

// Input: [4, 5, 1, 2, 0, 4]
// Output: 5  // (4 repeats, 5 is the first that doesn't)

// Input: [1, 2, 2, 1, 3, 3]
// Output: "No unique element"

// Input: [9, 8, 7, 8, 9]
// Output: 7

// Constraints:

// Use only basic JavaScript — avoid fancy built-in methods like .filter(), .map(), or Set.

// You may use nested loops.

// Do not use objects to store counts (yet).

var array = [4, 5, 1, 2, 0, 4];

function uniqueElement(array) {
    let uniqueNumber;
    for (i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++){
            if(array[i] !== array[j]){
                uniqueNumber = array[i];
            } 
        }
    }
    return uniqueNumber;
}

console.log(uniqueElement(array))