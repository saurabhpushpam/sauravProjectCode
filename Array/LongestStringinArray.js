// Write a JavaScript function that finds the longest string in an array.

//  Using for Loop:

var findLongestString = (array) => {
    let longest = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
};

console.log(findLongestString(["apple", "banana", "grapefruit", "kiwi"]));
console.log(findLongestString(["dog", "elephant", "lion"]));             

// Using reduce:

var findLongestString = (array) => {
    return array.reduce((longest, current) => current.length > longest.length ? current : longest, '');
};

console.log(findLongestString(["apple", "banana", "grapefruit", "kiwi"]));
console.log(findLongestString(["dog", "elephant", "lion"]));             



// practice :

let narr= ['apple', 'car', 'pen', 'banana'];
let lstr= '';
for(let i of narr){
    if(i.length>lstr.length){
        lstr= i;
    }
}
console.log(lstr);