/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j]) res = Math.max(res, traverse(i,j));
        };
    };
    
    function traverse(i,j){
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || !grid[i][j]) return 0;
        grid[i][j] = 0;
        return 1 + traverse(i + 1, j) + traverse(i - 1, j) + traverse(i, j + 1) + traverse(i, j - 1);
    };
    
    return res;
};