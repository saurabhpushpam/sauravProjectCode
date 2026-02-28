function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
let num1 = 36;
let num2 = 60;

console.log("GCD is:", findGCD(num1, num2));




// 36, 60
// t= 60, b=36, a=60
// t= 36, b= 24, a=36
// t= 24, b= 12, a= 24
// t=12, b=0, a=12


