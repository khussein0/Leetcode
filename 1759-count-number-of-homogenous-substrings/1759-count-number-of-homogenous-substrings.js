/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let res = 0, start = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[start] === s[i]) res += i - start + 1;
        else{
            res += 1;
            start = i;
        };
    };
    
    return res % (1e9 + 7);
};