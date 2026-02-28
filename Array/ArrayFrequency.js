// Write a JavaScript function to count the frequency of each element in an array and return the result as an object.

// Using a loop :

var countFrequency = (array) => {
  const frequency = {};
  for (let i = 0; i < array.length; i++) {
    if (frequency[array[i]]) {
      frequency[array[i]] += 1;
    } else {
      frequency[array[i]] = 1;
    }
  }
  return frequency;
};

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
console.log(countFrequency(["apple", "banana", "apple", "kiwi"]));

// Using Reduce :

var countFrequency = (array) => {
  return array.reduce((frequency, item) => {
    frequency[item] = (frequency[item] || 0) + 1;
    return frequency;
  }, {});
};

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
console.log(countFrequency(["apple", "banana", "apple", "kiwi"]));





// practice :


let narr= [0, 1, 2, 0, 3, 4, 5, 7, 3, 7, 2, 5];
let nobj= {};

for(let i=0; i<narr.length; i++){
  if(nobj[narr[i]]){
    nobj[narr[i]]=  nobj[narr[i]]+1;
  }
  else{
    nobj[narr[i]]=  1;
  }
}

console.log(nobj);