/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0, count = 32;

    while (count--){
        res *= 2;
        res += n & 1;
        n = n >> 1;
    };
    
    return res;
};