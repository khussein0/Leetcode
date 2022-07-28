/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {};
    for(let c of s) hash[c] = (hash[c] || 0) + 1;
    for(let c of t) if(!hash[c]--) return false;
    return Object.values(hash).every(val => !val);
};