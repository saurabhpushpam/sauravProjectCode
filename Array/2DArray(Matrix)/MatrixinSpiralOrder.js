function spiralOrder(matrix) {
    if (!matrix.length || !matrix[0].length) return [];

    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;

        // Traverse right column
        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;

        // Traverse bottom row (if still valid)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
            bottom--;
        }

        // Traverse left column (if still valid)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
            left++;
        }
    }

    return result;
}

// Example usage:
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(spiralOrder(matrix));
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
