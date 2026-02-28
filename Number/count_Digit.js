let number = 12345;
console.log("Number of digits:", number.toString().length);


function countDigits(num) {
    let count = 0;

    if (num === 0) return 1;

    num = Math.abs(num); // handle negative numbers
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    return count;
}

// Example usage
let num = 12345;
console.log("Number of digits:", countDigits(num));