// Write a JavaScript function to find the difference of two arrays. The difference should contain elements that are in the first array but not in the second array.

// Using Filter() :

var differenceofTwoArrays = (array1, array2) => {
    return array1.filter((num1) => !array2.includes(num1));
};

console.log(differenceofTwoArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); 
// Output: [1, 2]


// Using for loop :

var differenceofTwoArrays = (array1, array2) => {
    const result = [];
    for (let num of array1) {
        if (!array2.includes(num)) {
            result.push(num);
        }
    }
    return result;
};

console.log(differenceofTwoArrays([1, 2, 3, 4, 5], [3, 4, 8, 6, 7])); 
// Output: [1, 2]



// practice :

let narr1= [1, 2, 3, 4, 5];
let narr2= [3, 2, 5, 6, 1];
let resarr= [];

for(let i of narr1){
    if(!narr2.includes(i)){
        resarr.push(i);
    }
}

console.log('difference in two arrays : ', resarr);