/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let res = 0, row = grid.length, col = grid[0].length;
    
    for(let i = 1; i < row - 1; i++){
        for(let j = 1; j < col - 1; j++){
            if(grid[i][j] === 0){
                if(dfs(i, j)) res++;
            };
        };
    };
    
    function dfs(r, c){
        if(r < 0 || c < 0 || r >= row || c >= col) return false;
        if(grid[r][c]) return true;
        grid[r][c] = true;
        
        let top = dfs(r - 1, c);
        let bot = dfs(r + 1, c);
        let rig = dfs(r, c + 1);
        let lef = dfs(r, c - 1);
        
        return top && bot && rig && lef;
    };
    
    return res;
};