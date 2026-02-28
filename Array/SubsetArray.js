// function isSubset(a, b) {
//         // Your code here
//         let count= {};
//         for(let i of a){
//             if(count[i] == undefined){
//                 count[i]= 1;
//             }
//             else{
//                 count[i]++;
//             }
//         }
//         console.log(count);
//         for(let i of b){
//             if(count[i] == undefined || count[i] ==0){
//                 return false;
//             }
//             else{
//                 count[i]--;
//             }
//         }
//         console.log(count);
//         return true;
//     }

// let arr1= [10, 5, 2, 23, 19];
// let arr2= [19, 5, 3];



// console.log(isSubset(arr1, arr2));






function isSubset(a, b) {
  const freqA = {};
  const freqB = {};

  // count A
  for (const x of a) {
    freqA[x] = (freqA[x] || 0) + 1;
  }

  // count B
  for (const x of b) {
    freqB[x] = (freqB[x] || 0) + 1;
  }

  // check counts
  for (const x in freqB) {
    if (!freqA[x] || freqA[x] < freqB[x]) {
      return false;
    }
  }

  return true;
}

// Example
const A = [1, 2, 2];
const B = [2, 2];

console.log(isSubset(A, B)); // true
