function numIslands(grid) {
    if (!grid.length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function dfs(i, j) {
        // Base cases
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0'; // Mark as visited

        // Explore 4 directions
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
}

// Example usage:
const grid = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];

console.log(numIslands(grid)); // Output: 3

