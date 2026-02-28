function angramcheck(s1, s2){
    
     if(s1.length !== s2.length){
        return false;
    }

const count = {};
for (let char of s1) count[char] = (count[char] || 0) + 1;
for (let char of s2) {
    if (!count[char]) return false;
    count[char]--;
}
return true;
}

function anagramfunction(s1, s2){
    
    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');
    return sortedS1 === sortedS2;
}

let str1= process.argv[2];
let str2= process.argv[3];

console.log(angramcheck(str1, str2));
console.log(anagramfunction(str1, str2));



