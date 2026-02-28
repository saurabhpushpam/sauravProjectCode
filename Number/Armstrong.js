function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

// Example usage
let number = 153;

if (isArmstrong(number)) {
    console.log(number + " is an Armstrong number");
} else {
    console.log(number + " is not an Armstrong number");
}
