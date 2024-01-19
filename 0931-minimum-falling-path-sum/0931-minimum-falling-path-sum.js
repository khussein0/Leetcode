/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let m = matrix.length, n = matrix[0].length;

    for(let i = 1; i < m; i++){
        for(let j = 0; j < n; j++){
            matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j - 1] || 10000, matrix[i - 1][j + 1] || 10000);
        };
    };

    return Math.min(...matrix[m - 1]);
};