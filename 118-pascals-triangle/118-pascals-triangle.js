/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for (var i = 0; i < numRows; i++) {
        res[i] = [];
        res[i][0] = 1;
        for (var j = 1; j < i; j++) {
            res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
        res[i][i] = 1;
    }
    return res;
};