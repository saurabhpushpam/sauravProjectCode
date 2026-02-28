let str= "Hello world";

console.log("using length : ", str.length);

let count= 0;
while(str[count]!= undefined){
    count++;
}
// return count;

console.log("without using length : ", count);

let charcount=0;
for(let i of str){
    if(i!= " "){
        charcount++;
    }
}
console.log("without space : ", charcount);