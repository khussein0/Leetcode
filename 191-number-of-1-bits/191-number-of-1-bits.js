/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    for(var i = 0; i < 32; i++){
        count += n & 1;
        n >>= 1;
    }
    return count;
};