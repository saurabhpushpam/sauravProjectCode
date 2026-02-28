function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

// Example usage
let num1 = 12;
let num2 = 18;

console.log("LCM is:", findLCM(num1, num2));

