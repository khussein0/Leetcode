/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = new Array(n+1).fill(0);
    let offset = 1;
    
    for(let i = 1; i < n + 1; i++){
        if(offset*2 === i) offset = i;
        res[i] = res[i - offset] + 1;
    };
    
    return res;
};