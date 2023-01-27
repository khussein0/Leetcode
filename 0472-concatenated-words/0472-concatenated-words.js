/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let set = new Set(words), res = [];
    
    function isConcat(word){
        if(set.has(word)) return true;
        for(let i = 0; i < word.length; i++){
            let pre = word.slice(0, i+1);
            if(set.has(pre)){
                let post = word.slice(i+1);
                let res = isConcat(post);
                if(res) return true; 
            };
        };
        return false;
    };
    
    for(let word of words){
        set.delete(word);
        if(isConcat(word)) res.push(word);
        set.add(word);
    };
    
    return res;
};