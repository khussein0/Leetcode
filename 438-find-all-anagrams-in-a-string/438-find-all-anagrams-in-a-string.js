/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [], chars = {};
    
    for (let char of p) {
        if (char in chars) chars[char]++;
        else chars[char] = 1;
    };
    
    let left = 0, right = 0, count = p.length;
    
    while (right < s.length) {
        if (chars[s[right]] > 0) count--;

        chars[s[right]]--;
        right++;

        if (count === 0) res.push(left);
        
        if (right - left == p.length){
            if (chars[s[left]] >= 0) count++;
            chars[s[left]]++;
            left++;
        };
    };
    
    return res;
};