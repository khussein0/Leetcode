/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = new Map(), start = 0, max = 0;
  
    for(var i = 0; i < s.length; i++){
        if(map.has(s[i])) start = Math.max(map.get(s[i]) + 1, start);
        map.set(s[i], i);
        max = Math.max(i - start + 1, max);
    }
    return max;
};