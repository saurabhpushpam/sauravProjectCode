function isPerfectNumber(num) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num && num !== 0;
}

// Example usage
let number = 28;

if (isPerfectNumber(number)) {
    console.log(number + " is a Perfect Number");
} else {
    console.log(number + " is not a Perfect Number");
}
