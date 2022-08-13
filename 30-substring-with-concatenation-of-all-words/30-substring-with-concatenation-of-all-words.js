/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let res = [], wordLength = words[0].length, wordCount = words.length, len = wordLength * wordCount, map = {};
    
    for(let word of words) map[word] = map[word] + 1 || 1;
    
    for(let i = 0; i < s.length; i++){
        let sub = s.slice(i, i + len);
        if(isConcat(sub, map, wordLength)) res.push(i);
    };
    
    return res;
};
    
function isConcat(sub,map,wordLength){
    let seen = {};
    for (let i = 0; i < sub.length; i += wordLength) {
        let word = sub.slice(i, i + wordLength);
        seen[word] = seen[word] + 1 || 1;
    };
    
    for(let key in map){
        if(map[key] !== seen[key]) return false;
    };
    
    return true;
}