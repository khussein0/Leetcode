/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = [], num = Math.floor(n/2);
    
    if(n % 2 !== 0) res.push(0);
    
    for(let i = 1; i <= num; i++){
        res.push(i,-i);
    };
    
    return res;
};