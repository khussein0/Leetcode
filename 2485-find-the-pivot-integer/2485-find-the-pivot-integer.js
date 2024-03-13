/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sq = Math.sqrt(n * (n+1) / 2);
    
    if(sq % 1 !== 0) return -1;
    else return Math.floor(sq);
};