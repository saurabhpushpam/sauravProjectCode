let arrobj= [
    {
        name: "saurav",
        age: 25
    },
    {
        name: "puspam",
        age: 26
    },
    {
        name: "kumar",
        age: 27
    },
    {
        name: "misra",
        age: 28
    }
]

let sum=0;
for(let i=0; i<arrobj.length; i++){
    let temp= arrobj[i]["age"];
    sum= sum+temp;
}

console.log("sum of age is ", sum)




// practice :


let nobj= [
    {
        name: "saurav",
        age: 25
    },
    {
        name: "puspam",
        age: 26
    },
    {
        name: "kumar",
        age: 27
    },
    {
        name: "misra",
        age: 28
    }
]

let nsum=0;
for(let i=0; i< nobj.length; i++){
    nsum= nsum + nobj[i].age;
}
console.log("sum of age in object is : ", nsum);