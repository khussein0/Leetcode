/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    let map = new Map();
    
    function backtrack(idx, lastChar, count, k){
        if(k < 0) return Number.POSITIVE_INFINITY;
        if(idx >= s.length) return 0;
        
        let key = `${idx}#${lastChar}#${count}#${k}`;
        if(key in map) return map[key];
        
        if(s[idx] === lastChar){
            let inc = [1, 9, 99].includes(count) ? 1 : 0;
            map[key] = inc + backtrack(idx + 1, lastChar, count + 1, k);
        }else{
            map[key] = Math.min(1 + backtrack(idx + 1, s[idx], 1, k), backtrack(idx + 1, lastChar, count, k - 1));
        };
        return map[key];
    };
    return backtrack(0, '', 0, k);
};