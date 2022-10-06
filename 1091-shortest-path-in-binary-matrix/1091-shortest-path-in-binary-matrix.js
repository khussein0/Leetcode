/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const dir = [[1,0], [-1,0], [0,1], [0,-1], [1,1], [-1,-1], [1,-1], [-1,1]];
    if(grid[0][0] === 1) return -1;
    
    let q = [[0, 0, 1]];
    
    while(q.length){
        let [row, col, path] = q.shift();
        
        if(row === grid.length - 1 && col === grid.length - 1) return path;
        
        for(let [dx, dy] of dir){
            let x = row + dx, y = col + dy;
            
            if(x < 0 || x >= grid.length || y < 0 || y >= grid.length || grid[x][y] !== 0) continue;
            
            q.push([x, y, path + 1]);
            grid[x][y] = 1;
        };
    };
    
    return -1;
};