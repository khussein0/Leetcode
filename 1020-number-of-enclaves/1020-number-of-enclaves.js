/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let res = 0, row = grid.length, col = grid[0].length;
    
    for(let i = 0; i < row; i++){
        dfs(i, 0);
        dfs(i, col - 1);
    };
    
    for(let j = 0; j < col; j++){
        dfs(0, j);
        dfs(row - 1, j);
    };
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 1) res++;
        };
    };
    
    function dfs(r, c){
        if(r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === 0) return;
        grid[r][c] = 0;
        
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };
    
    return res;
};