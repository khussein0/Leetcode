/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    let res = s;
    
    if(k === 1){
        for(let i = 0; i < s.length; i++){
            s = s.substring(1, s.length) + s[0];
            if(s < res) res = s;
        };
        return res;
    };
    
    return [...s].sort().join('');
};