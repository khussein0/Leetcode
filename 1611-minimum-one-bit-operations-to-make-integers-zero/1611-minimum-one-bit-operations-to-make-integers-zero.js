/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    let res = 0;
    for(; n > 0; n >>= 1) res ^= n;
    return res;
};