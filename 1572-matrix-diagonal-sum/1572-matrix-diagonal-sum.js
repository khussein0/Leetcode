/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let len = mat.length, mid = Math.floor(len / 2), res = 0;
    
    for(let i = 0; i < len; i++){
        res += mat[i][i];
        res += mat[len - 1 - i][i];
    };
    
    if(len % 2 === 1) res -= mat[mid][mid];
    
    return res;
};