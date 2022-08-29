/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                res++;
                dfs(i, j, grid);
            };
        };
    };
    return res;
};

function dfs(row, col, grid){
  if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') return;
    
    grid[row][col] = '0';
    
    dfs(row + 1, col, grid);
    dfs(row - 1, col, grid);
    dfs(row, col + 1, grid);
    dfs(row, col - 1, grid);
};