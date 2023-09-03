/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let res = 1;
    
    for(let i = 1; i <= m - 1; i++){
        res = res * (n-1+i) / i;
    };
    
    return res;
};