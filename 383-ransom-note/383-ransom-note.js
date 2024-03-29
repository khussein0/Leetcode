/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {};
    for(let char of magazine){
        map[char] = (map[char] || 0) + 1;
    };
    
    for(let char of ransomNote){
      if(!map[char]) return false;
      map[char]--;  
    };
    
    return true;
};