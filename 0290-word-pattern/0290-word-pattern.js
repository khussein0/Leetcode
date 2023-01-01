/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   let words = s.split(" "), map = new Map();
    
    if(words.length !== pattern.length || new Set(words).size !== new Set(pattern).size) return false;
    
    for(let i = 0; i < pattern.length; i++){
        if(map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
        map.set(pattern[i], words[i]);
    };
    
    return true;
};