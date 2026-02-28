let arr= [1, 2, 3, 4, 3, 2, 7]

let temp= {};

for(let i of arr){
    if(temp[i] == undefined){
        temp[i]= 1;
    }
    else{
        temp[i]++;
    }
}

for(let i in temp){
    if(temp[i] ==1){
        console.log(i);
    }
}




// practice 

let narr= [1, 2, 3, 4, 5, 4, 3, 2, 1, 6, 7];

let nobj= {};

for(let i of narr){
    if(nobj[i]){
        nobj[i]++;
    }
    else{
        nobj[i]= 1;
    }
} 

let rarr= []
for(let i in nobj){
    if(nobj[i] == 1){
        rarr.push(i);
    }
}

console.log(rarr);

