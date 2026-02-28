function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    let row = 0;
    let col = matrix[0].length - 1; // start top-right

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--; // move left
        } else {
            row++; // move down
        }
    }

    return false; // target not found
}

// Example usage:
const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];

console.log(searchMatrix(matrix, 5));  // true
console.log(searchMatrix(matrix, 15)); // false
