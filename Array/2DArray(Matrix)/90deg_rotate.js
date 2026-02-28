function rotateMatrix90(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    // Create a new matrix for the rotated result :
//     Array.from({ length: m }) → ek array banata hai length m ke saath.

// () => Array(n) → har element me n-length ka array daal deta hai.

// Result → m × n 2D array, jisme sab elements undefined hote hain.
    const rotated = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }

    return rotated;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix90(matrix);
console.log(rotatedMatrix);


























function rotate2darr90(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let rotated = [];

    for (let j = 0; j < m; j++) {
        rotated[j] = []; // initialize each row manually
        for (let i = n - 1; i >= 0; i--) {
            rotated[j].push(matrix[i][j]);
        }
    }

    return rotated;
}

// Example usage:
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotate2darr90(matrix1));
