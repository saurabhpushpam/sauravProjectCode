let arr1= [1, 15, 24, 57, 2, 0].sort();

let arr2= [10, 25, 13, 48, 53, 33 , 43].sort();

console.log(arr1, arr2);

let newarr= [];

for(let i=0; i<arr1.length; i++){
    for (let j=0; j<= arr2.length; j++){
        if(arr1[i]<= arr2[j] && arr1[i+1]>= arr2[j]){
            newarr.push(arr2[j]);
        }
    }
     newarr.push(arr1[i]);
}

console.log(newarr);