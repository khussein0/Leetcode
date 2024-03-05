/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let l = 0, r = s.length - 1;
    
    while(l < r && s[l] === s[r]){
        let char = s[l];
        while(l <= r && s[l] === char) l++;
        while(r >= l && s[r] === char) r--;
    }
    
    return r - l + 1;
};