
var hasDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(hasDuplicates([1, 2, 3, 4, 5, 6]));         
console.log(hasDuplicates([1, 2, 3, 3, 4, 5, 6]));    
console.log(hasDuplicates([7, 8, 8, 9, 10, 11]));   


// practice :


const checkduplicate = (narr) => {
    let nobj= {}

for(let i=0; i<narr.length; i++){
    if(nobj[narr[i]]){
        nobj[narr[i]]++;
    }
    else{
        nobj[narr[i]] = 1;
    }
}

// console.log(nobj);
for(let i of narr){
    if(nobj[i]>1){
        return "Duplicate values exists";
    }

}

return "all values are unique, not duplicate found"

}

let checkduplicatebyforloop = (narr) => {
    for(let i=0; i<narr.length-1; i++){
        for(let j= i+1; j< narr.length; j++){
            if(narr[i] == narr[j]){
                return "duplicate exist"
            }
        }
    }
    return "not duplicate exists!!"
}


let narr= [1, 2, 3, 9, 5, 5, 6, 7];


console.log(checkduplicate(narr));
console.log(checkduplicatebyforloop(narr));