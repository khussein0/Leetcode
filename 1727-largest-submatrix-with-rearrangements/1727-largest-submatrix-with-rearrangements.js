/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    const row = matrix.length, col = matrix[0].length;
    let res = 0;
    
    for(let i = 1; i < row; i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j] === 1) matrix[i][j] += matrix[i-1][j];
        };
    };
    
    matrix.forEach(r => {
        r.sort((a,b) => b - a);
        for(let i = 0, k = 1; i < col && r[i] > 0; ++i, ++k){
            const sum = r[i] * k;
            res = Math.max(res, sum);
        };
    });
    
    return res;
};