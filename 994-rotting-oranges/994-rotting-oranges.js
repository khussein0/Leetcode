/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rotten = [], fresh = 0, row = grid.length, col = grid[0].length, min = 0;
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 2) rotten.push([i,j]);
            if(grid[i][j] === 1) fresh++;
        };
    };
    
    while(rotten.length){
        let size = rotten.length;
        for(let i = 0; i < size; i++){
            let [x, y] = rotten.shift();
            if(x - 1 >= 0 && grid[x-1][y] === 1){
                grid[x-1][y] = 2;
                fresh--;
                rotten.push([x-1, y]);
            };
            if(y + 1 < col && grid[x][y+1] === 1){
                grid[x][y+1] = 2;
                fresh--;
                rotten.push([x, y+1]);
            };
            if(x + 1 < row && grid[x+1][y] === 1){
                grid[x+1][y] = 2;
                fresh--;
                rotten.push([x+1, y]);
            };
            if(y - 1 >= 0 && grid[x][y-1] === 1){
                grid[x][y-1] = 2;
                fresh--;
                rotten.push([x, y-1]);
            };
        };
        if(rotten.length) min++;
    };
    return fresh === 0 ? min : -1;
};