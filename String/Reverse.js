let str= process.argv[2];
// let reversedStr = str.split('').reverse().join('');
let rev= '';

rev= str.split('').reverse().join('');
console.log('reverse by built-in function : ', rev);

let newrev= '';
for(let i=0; i<str.length; i++){
    newrev= newrev + str.charAt(str.length-1-i);
}

console.log('reverse without built-in function : ', newrev);

console.log("process data: ", process.env.os)





