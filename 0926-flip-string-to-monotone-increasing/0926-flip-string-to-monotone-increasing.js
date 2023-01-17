/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let seen = 0, res = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '0') res = Math.min(res + 1, seen);
        else seen++;
    };
    return res;
};