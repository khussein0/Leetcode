/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let q = [], max = 0, dir = [[0,1], [1,0], [0,-1], [-1,0]];
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            if(grid[i][j] === 1) q.push([i,j,0]);
        };
    };
    
    while(q.length > 0){
        let[x,y,c] = q.shift();
        max = Math.max(max, c);
        
        for(let [dx,dy] of dir){
            let newX = x + dx, newY = y + dy;
            
            if(newX < 0 || newY < 0 || newX >= grid.length || newY >= grid.length || grid[newX][newY] === 1) continue;
            
            q.push([newX,newY,c+1]);
            grid[newX][newY] = 1; 
        };
    };
    
    return max === 0 ? -1 : max;
};