/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const mod = 1e9 + 7;
    let res = 1, s = 0, p = 0;
    
    for(let ch of corridor){
        if(ch === 'P') p = (p + res) % mod;
        else if(++s === 3){
            s = 1;
            res = p;
        }else p = res;
    };
    
    return s === 2 ? res : 0;
};