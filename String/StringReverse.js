// Write a JavaScript function that takes a string as input and returns the string reversed.

var strReverse = (str) => [...str].reverse().join("");

console.log(strReverse("soumaysoni"));


// breakdown code for understanding..........................................................


// Input: "soumay soni"
// Output: "inos yamuos"
var strReverse = (str) => {
    // Convert the string into an array of characters
    const charArray = [...str];

    // Reverse the array
    const reversedArray = charArray.reverse();

    // Join the reversed array back into a string
    const reversedStr = reversedArray.join("");

    // Return the reversed string
    return reversedStr;
};

// Example usage
console.log(strReverse("soumaysoni"));  // Outputs: "inos yamuos"