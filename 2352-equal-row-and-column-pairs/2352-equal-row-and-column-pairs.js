/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = grid.map(r => r.join()),
          cols = grid[0].map((c, i) => grid.map(r => r[i]).join());
    let res = 0;
    
    for(let row of rows){
        for(let col of cols){
            if(row === col) res++;
        };
    };
    
    return res;
};