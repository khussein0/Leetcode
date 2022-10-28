/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let res = [], prevWord = '';
    for(let word of words){
        let sortedWord = word.split('').sort().join('');
        if(sortedWord === prevWord) continue;
        prevWord = sortedWord;
        res.push(word);
    };
    
    return res;
};