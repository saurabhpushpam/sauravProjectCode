let number = 12345;
let reversed = Number(number.toString().split('').reverse().join(''));
console.log(reversed);




function reverseNumber(num) {
    let reversed = 0;

    while (num !== 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reversed;
}

// Example usage
let num = 12345;
console.log("Reversed number:", reverseNumber(num));