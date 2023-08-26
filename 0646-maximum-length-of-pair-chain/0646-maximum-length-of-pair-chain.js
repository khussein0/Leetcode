/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b) => a[1] - b[1]);
    let res = 0, cur = -Infinity;
    
    for(const [s, e] of pairs){
        if(cur < s){
            cur = e;
            res++;
        };
    };
    
    return res;
};