/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    const island1 = [], island2 = [];
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            if(grid[i][j] === 1){
                if(!island1.length) dfs(grid, i, j, island1);
                else if(!island2.length) dfs(grid, i, j, island2);
            };
        };
    };
    
    let dif = island1.length > island2.length ? calcDist(island2, island1) : calcDist(island1, island2);
    return dif;
};

function dfs(grid, i, j, res){
    if(i < 0 || j < 0 || i >= grid.length || j >= grid.length || grid[i][j] !== 1) return;
    grid[i][j] = 0;
    res.push([i, j]);
    
    dfs(grid, i-1, j, res);
    dfs(grid, i+1, j, res);
    dfs(grid, i, j-1, res);
    dfs(grid, i, j+1, res);
};

function calcDist(dist1, dist2){
    let min = Infinity;
    
    for(let i = 0; i < dist1.length; i++){
        for(let j = 0; j < dist2.length; j++){
            let diff = Math.abs(dist1[i][0] - dist2[j][0]) + Math.abs(dist1[i][1] - dist2[j][1]) - 1;
            min = Math.min(min, diff);
        };
    };
    return min;
};