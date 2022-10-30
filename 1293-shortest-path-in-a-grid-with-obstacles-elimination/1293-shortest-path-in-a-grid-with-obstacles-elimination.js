/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    if(grid.length === 0 || !grid) return 0;
    
    let row = grid.length, col = grid[0].length, dir = [[1,0],[-1,0],[0,1],[0,-1]], visited = new Set(), moves = 0, q = [[0,0,k]];
    
    visited.add(`0-0-${k}`);
    
    while(q.length){
        let nextMoves = [];
        
        while(q.length > 0){
            let[x,y,rem] = q.pop();
            
            if(x === row - 1 && y === col - 1) return moves;
            
            for(let d of dir){
                let r = x + d[0], c = y + d[1];
                if(r < 0 || c < 0 || r >= row || c >= col || (grid[r][c] === 1 && rem === 0)) continue;
                let newK = grid[r][c] === 1 ? rem - 1 : rem;
                let key = `${r}-${c}-${newK}`;
                
                if(!visited.has(key)){
                    visited.add(key);
                    nextMoves.push([r,c,newK]);
                };
            };
        };
        q = nextMoves;
        moves++;
    };
    return -1;
};