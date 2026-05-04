function findFirstAndLast(arr, target) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (first === -1) {
        first = i; // first occurrence
      }
      last = i; // update till last occurrence
    }
  }

  return { first, last };
}

// Example
const arr = [1, 2, 3, 2, 7, 6, 5, 3];
const target = 3;

console.log(findFirstAndLast(arr, target));





let arr1= [1, 2, 3, 2, 4, 2, 5, 6, 3, 2, 7];
let tar= 2;
let obj={"f": null, "l": null, "c": 0}

for(let i=0; i<arr1.length; i++){
    if(arr1[i] === tar){
       if(obj["f"]== null){
           obj["f"]=i;
           obj["l"]=i;
           obj["c"]=1;
       } 
       else{
           obj["l"]= i;
           obj["c"]= obj["c"]+1;
       }
    }
}

console.log(obj);

