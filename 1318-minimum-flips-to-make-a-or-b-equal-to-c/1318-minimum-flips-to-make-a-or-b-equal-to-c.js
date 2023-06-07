/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    return count((a | b) ^ c) + count(a & b & ~c);
};

function count(i){
    let c = 0;
    for(; i; i >>= 1) c += i & 1;
    return c;
};