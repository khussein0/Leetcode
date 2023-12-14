/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const row = grid.length, col = grid[0].length,
          res = new Array(row).fill().map(() => new Array(col)),
          rowOnes = new Array(row).fill(0),
          colOnes = new Array(col).fill(0);
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 1){
                rowOnes[i] += 1;
                colOnes[j] += 1;
            };
        };
    };
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            res[i][j] = rowOnes[i] + colOnes[j] - (row - rowOnes[i]) - (col - colOnes[j]);
        };
    };
    
    return res;
};