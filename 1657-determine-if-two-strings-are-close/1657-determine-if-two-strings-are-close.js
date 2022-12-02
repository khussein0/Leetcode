/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;
    const aCode = "a".charCodeAt();
    
    let c1 = new Array(26).fill(0), c2 = new Array(26).fill(0);
    
    for(let i = 0; i < word1.length; i++){
        c1[word1[i].charCodeAt() - aCode]++;
        c2[word2[i].charCodeAt() - aCode]++;
    };
    
    for(let i = 0; i < 26; i++){
        if((c1[i] && !c2[i]) || (!c1[i] && c2[i])) return false;
    };
    
    return c1.sort((a,b) => a - b).toString() === c2.sort((a,b) => a - b).toString();
};