/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let m = grid.length, n = grid[0].length, res = [];
    
    for(let s = 0; s < n; s++){
        let j = s;
        for(let i = 0; i < m; i++){
            let d = grid[i][j]
            if(d === grid[i][j+d]) j += d;
            else i = m, j = -1;
        };
        res[s] = j;
    };
    return res;
};