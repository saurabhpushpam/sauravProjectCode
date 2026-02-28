// let num= [0, 1, 3, 5, 6];

// let n=7;

// let x= {}

// for(let i=0; i<=n; i++){
//     x[i] =0;

//     let y= x.hasOwnProperty(num[i])
//    if(y){
//     x[num[i]] = x[num[i]] +1;
//    }
//    else{
//     x[num[i]]= 1;
//    }
// }

// for(let [k, v] of Object.entries(x)){
//     if(v==0){
//         console.log(k);
//     }
// }


var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;

    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};

nums = [3, 0, 1]
console.log(missingNumber(nums)) // Output: 2

