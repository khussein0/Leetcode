/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let result = 0, map = new Map();
    for (let i = 0; i < words.length; i++){
        if (words[i].length > s.length) continue;
        if (isSubsequence(words[i], s, map)){
            result++;
        };
    };
    return result;
};

const isSubsequence = (word, string, map) => {
    if (map.has(word)) return map.get(word);
    let index = -1;
    for (const c of word){
        index = string.indexOf(c, index+1);
        if (index == -1){
            map.set(word, false);
            return false;
        };
    };
    map.set(word, true);
    return true;
};