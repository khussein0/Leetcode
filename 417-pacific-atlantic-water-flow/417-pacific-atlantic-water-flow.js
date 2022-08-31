/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if(!heights.length) return heights;
    
    let row = heights.length, col = heights[0].length, res = [], dp = new Uint8Array(row * col);
    
    for(let i = 0; i < row; i++){
        dfs(i, 0, 1, heights[i][0]);
        dfs(i, col - 1, 2, heights[i][col - 1]);
    };
    
    for(let j = 0; j < col; j++){
        dfs(0, j, 1, heights[0][j]);
        dfs(row - 1, j, 2, heights[row - 1][j]);
    };
    
    function dfs(i, j, visited, mat){
        let ij = i * col + j;

        if((dp[ij] & visited) || heights[i][j] < mat) return;

        dp[ij] += visited;
        mat = heights[i][j];

        if(dp[ij] === 3) res.push([i,j]);
        if(i + 1 < row) dfs(i + 1, j, visited, mat);
        if(i > 0) dfs(i - 1, j, visited, mat);
        if(j + 1 < col) dfs(i, j + 1, visited, mat);
        if(j > 0) dfs(i, j - 1, visited, mat);
    };
    
    return res;
};

