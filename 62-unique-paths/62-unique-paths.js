/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let res = 1;
    for(let i = n; i < m + n -1; i++){
        res *= i;
        res /= i - n + 1;
    };
    return res;
};