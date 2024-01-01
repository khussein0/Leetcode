/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);
    
    let res = 0;
    
    for(let cookie of s){
        if(cookie >= g[res]) res++;
    };
    
    return res;
};