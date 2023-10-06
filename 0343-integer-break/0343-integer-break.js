/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n === 2) return 1;
    if(n === 3) return 2;
    
    const count3 = Math.floor(n / 3), rem = n % 3;
    
    if(rem === 0) return 3 ** count3;
    else if(rem === 1) return 3 ** (count3 - 1) * 4;
    else return 3 ** count3 * 2;
};