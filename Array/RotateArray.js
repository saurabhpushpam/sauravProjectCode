let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newarr = [...arr];

console.log("Original Array:", arr);

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);

console.log("a:", a, "b:", b);

if (b !== undefined && !isNaN(b)) {
    // reverse segment a..b
    let temp = a - 1;
    for (let i = b - 1; i >= a - 1; i--) {
        newarr[temp] = arr[i];
        temp++;
    }
    console.log(newarr);
}
else if (!isNaN(a)) {
    // reverse from a..end
    let temp = a - 1;
    for (let i = arr.length - 1; i >= a - 1; i--) {
        newarr[temp] = arr[i];
        temp++;
    }
    console.log(newarr);
}
else {
    // full reverse
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[arr.length - 1 - i];
    }
    console.log(newarr);
}






let arr1 = [1, 2, 3, 4, 5];

let first = arr1.shift(); // first element nikaal liya
arr1.push(first);        // last me daal diya

console.log(arr1);



// rotate 1 right

let arr2 = [1, 2, 3, 4, 5];

let first1 = arr2[0];

for (let i = 0; i < arr2.length - 1; i++) {
  arr2[i] = arr2[i + 1];
}

arr2[arr2.length - 1] = first1;

console.log(arr2);      // [2, 3, 4, 5, 1]







// rotate 1 left
console.log("Rotate 1 left:");

let arr3 = [1, 2, 3, 4, 5];

let first2 = arr3[arr3.length - 1];

for (let i = arr3.length - 2; i >= 0; i--) {
  arr3[i+1] = arr3[i];
}

arr3[0] = first2;

console.log(arr3);      // [5, 1, 2, 3, 4]



// rotate array at 90 degree

let narr= [1, 2, 3, 4, 5, 6, 7]
let len= narr.length;
let h= Math.floor(len/2);
// console.log(h, len);
let rarr= [];

for(let i=h; i<len; i++){
    // console.log(i);
    rarr.push(narr[i]);
}



for(let i=0; i<h; i++){
    rarr.push(narr[i]);
}



console.log('Original Array : ', narr);
console.log('Array after rotation : ', rarr);



function rotateHalf(arr) {
  let mid = arr.length / 2;

  for (let i = 0; i < mid; i++) {
    [arr[i], arr[i + mid]] = [arr[i + mid], arr[i]];
  }

  return arr;
}

console.log(rotateHalf([1, 2, 3, 4, 5, 6]));






function rotateRight(arr, k) {
  k = k % arr.length; // handle large k
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]


function rotateLeft(arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
// [3, 4, 5, 1, 2]



function rotateRightInPlace(arr, k) {
  k = k % arr.length;

  arr.reverse();
  arr.splice(0, k, ...arr.slice(0, k).reverse());
  arr.splice(k, arr.length - k, ...arr.slice(k).reverse());

  return arr;
}

console.log(rotateRightInPlace([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]





function rotate90Clockwise(matrix) {
  const n = matrix.length;
  const result = Array.from({ length: n }, () => Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotate90Clockwise(matrix));
/*
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
*/





function rotate90AntiClockwise(matrix) {
  const n = matrix.length;
  const result = Array.from({ length: n }, () => Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[n - 1 - j][i] = matrix[i][j];
    }
  }

  return result;
}




function rotateInPlace(matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}








// Function to rotate a square matrix 90° clockwise
function rotateMatrix90(matrix) {
  const n = matrix.length;

  // Step 1: Reverse the matrix (flip vertically)
  matrix.reverse();

  // Step 2: Transpose the matrix (swap rows and columns)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}

// Example usage:
let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Original Matrix:");
console.table(matrix1);

rotateMatrix90(matrix1);

console.log("Matrix after 90° clockwise rotation:");
console.table(matrix1);



// 1 2 3                7 4 1
// 4 5 6                8 5 2 
// 7 8 9                9 6 3





