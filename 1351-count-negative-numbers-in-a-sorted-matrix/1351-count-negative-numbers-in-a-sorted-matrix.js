/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length, n = grid[0].length, res = 0;
    
    for(let i = 0; i < m; i++){
        for(let j = n - 1; j >= 0; j--){
            if(grid[i][j] >= 0) break;
            res++;
        };
    };
    
    return res;
};