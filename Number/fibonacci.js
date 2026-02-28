let n = 5;
let f = 0;
let s = 1;
if (n == 0) {
  return;
}
if (n == 1) {
  console.log(f);
}
if (n == 2) {
  console.log(f, s);
} else {
//   console.log(f);
//   console.log(s);
let x;

  for (let i = 1; i < n; i++) {
    x = f + s;
    // console.log(x);
    f = s;
    s=x;
  }
  console.log(x);
}

// 0 1 1 2 3 5




// Write a JavaScript function that takes a positive integer n and returns the n-th number in the Fibonacci sequence.

const fibonacci = (n) => {
  if (n <= 0) return 0; // For n = 0
  if (n === 1) return 1; // For n = 1

  let a = 0,
    b = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
};

console.log(fibonacci(6)); // Outputs: 8

