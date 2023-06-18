/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
    let mod = 1e9+7, res = 0, rows = grid.length, cols = grid[0].length;
    const dp = Array(rows).fill(null).map(_ => Array(cols).fill(0));
    
    function dfs(r, c, val){
        if(r < 0 || c < 0 || r === rows || c === cols || grid[r][c] <= val) return 0;
        if(dp[r][c]) return dp[r][c];
        return dp[r][c] = (1 + dfs(r + 1, c, grid[r][c]) + 
                       dfs(r - 1, c, grid[r][c]) + 
                       dfs(r , c + 1, grid[r][c]) +  
                       dfs(r , c - 1, grid[r][c])) % mod;
    };
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            res += dfs(i, j, -1) % mod;
        };
    };
    
    return res % mod;
};