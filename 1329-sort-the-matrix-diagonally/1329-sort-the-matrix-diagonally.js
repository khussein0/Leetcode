/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let row = mat.length, col = mat[0].length - 1;
    for(let i = 2 - row; i < col; i++){
        let diag = new Array(row), idx = 0;
        for(let j = 0; j < row; j++){
            if(mat[j][i+j]) diag[idx++] = mat[j][i+j];
        };
        diag.sort((a,b) => a - b);
        idx = 0;
        for(let j = 0; j < row; j++){
            if(mat[j][i+j]) mat[j][i+j] = diag[idx++];
        };
    };
    return mat;
};