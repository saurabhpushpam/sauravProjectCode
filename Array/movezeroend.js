let arr= [1, 8, 0 ,9, 0, 3, 2, 0, 6];

let newarr= [];
count= 0;

for(let i of arr){
    if(i ==0){
        count ++;
        continue;
    }
    newarr.push(i);
}

for(let i=0; i<count; i++){
    newarr.push(0);
}


console.log("new Array :  ", newarr);

// insert in same array 

let pos=0;
for(let i=0; i<arr.length; i++){
    if(arr[i] != 0){
        arr[pos]= arr[i];
        pos= pos+1;
    }
}

while(pos< arr.length){
    arr[pos]= 0
    pos++;
}

console.log("Array : ", arr);



// practice :
 let narr= [1, 0, 8, 7, 0, 2, 3, 4];

 // let inse
 let zcount= 0;
 let resarr= [];

 for(let i of narr){
    if(i==0){
        zcount++;
    }
    else{
        resarr.push(i);
    }
 }
 for(let i=0; i< zcount; i++){
    resarr.push(0);
 }
 console.log("original Array : ", narr);
 console.log("After moving 0 at end : ", resarr);


 // in same array :

 let narr1 = [1, 2, 0, 5, 9, 0, 6, 7];
 console.log("original Array : ", narr1);

 let npos= 0;
 for(let i of narr1){
    if(i != 0){
        narr1[npos]= i;
        npos++;
    }
 }


 while(npos< narr1.length){
    narr1[npos]= 0;
    npos++;
 }

 
 console.log("After moving 0 at end in Array : ", narr1);