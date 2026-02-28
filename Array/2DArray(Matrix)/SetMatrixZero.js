function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;

    // Check if first row has zero
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }

    // Check if first column has zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }

    // Use first row and column as markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set zeroes based on markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Update first row
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) matrix[0][j] = 0;
    }

    // Update first column
    if (firstColZero) {
        for (let i = 0; i < rows; i++) matrix[i][0] = 0;
    }
}

// Example usage:
let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

setZeroes(matrix);
console.log(matrix);
// Output:
// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]
