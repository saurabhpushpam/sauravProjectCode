const str= 'waterbottle';
let str2= 'erbottlewat';

function isRotation(s1, s2){
    if(s1.length !== s2.length){
        return false;
    }
    let temp= s1 + s1;
    return temp.includes(s2);
}
console.log(isRotation(str, str2));



function isRotationone(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}

console.log(isRotationone("abcd", "cdab")); // true
console.log(isRotationone("abcd", "acbd")); // false


function isRotationtwo(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  return str1.length === str2.length &&
         (str1 + str1).includes(str2);
}



function isRotationthree(str1, str2) {
  return str1.length === str2.length &&
         (str1 + str1).includes(str2);
}
