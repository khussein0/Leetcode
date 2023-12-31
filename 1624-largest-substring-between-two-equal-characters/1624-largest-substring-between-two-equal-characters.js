/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const idxMap = new Map();
    let res = -1;
    
    for(let i = 0; i < s.length; i++){
        if(idxMap.has(s[i])) res = Math.max(res, i - idxMap.get(s[i]) - 1);
        else idxMap.set(s[i], i);
    };
    
    return res;
};