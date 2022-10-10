/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
    let m = grid.length, n = grid[0].length;
    let dp = new Array(m).fill().map(_ => new Array(n));
    dp[0] = [...grid[0]];
    
    for(let i = 1; i < m; i++){
        for(let j = 0; j < n; j++){
            let min = Number.MAX_VALUE;
            for(let k = 0; k < n; k++){
                min = Math.min(min, dp[i - 1][k] + moveCost[grid[i - 1][k]][j]);
            };
            dp[i][j] = grid[i][j] + min;
        };
    };
    return Math.min(...dp[m - 1]);
};