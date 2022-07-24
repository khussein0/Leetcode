/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, j = matrix[0].length - 1, i = 0;
    while(i < m && ~j){
        let c = matrix[i][j];
        if(c === target) return true;
        else if(c < target) i++;
        else j--;
    }
    return false;
};