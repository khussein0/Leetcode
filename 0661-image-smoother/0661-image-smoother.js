/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const row = img.length, col = img[0].length, res = new Array(row);
    
    for(let i = 0; i < row; ++i){
        res[i] = new Array(col);
        
        for(let j = 0; j < col; ++j){
            let total = 0, count = 0;
            
            for(let x = Math.max(0, i-1); x < Math.min(row, i+2); ++x){
                for(let y = Math.max(0, j-1); y < Math.min(col, j+2); ++y){
                    total += img[x][y];
                    count += 1;
                };
            };
            
            res[i][j] = Math.floor(total / count);
        };
    };
    
    return res;
};