// Write a JavaScript function to find the common elements (intersection) between two arrays.

var IntersectionofTwoArrays = (array1, array2) => {
  const intersectionElements = [];
  const newArray1 = [...new Set(array1)];
  const newArray2 = [...new Set(array2)];

  for (let i = 0; i < newArray1.length; i++) {
    if (newArray2.includes(newArray1[i])) {
      intersectionElements.push(newArray1[i]);
    }
  }

  return intersectionElements;
};

console.log(IntersectionofTwoArrays([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
// Output: [4, 5]

// Alternative Using filter:

var IntersectionofTwoArrays = (array1, array2) => {
  const newArray1 = [...new Set(array1)];
  const newArray2 = new Set(array2); // Convert to Set for efficient lookup
  return newArray1.filter((item) => newArray2.has(item));
};

console.log(IntersectionofTwoArrays([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
// Output: [4, 5]



// practice :

let narr1= [1, 2, 3, 4, 5];
let narr2= [3, 5, 7, 9, 8];

let sarr1= [...new Set(narr1)];
let sarr2= [...new Set(narr2)];
let resarr=[];

for(let i=0; i<sarr1.length; i++){
    if(sarr2.includes(sarr1[i])){
        resarr.push(sarr1[i]);
    }
}

console.log(resarr);


