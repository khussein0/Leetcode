/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = {};
    for(let i = 0; i < order.length; ++i) map[order[i]] = i;
    
    function isSorted(w1, w2){
        for(let i = 0; i < Math.min(w1.length, w2.length); i++){
            if(map[w1[i]] < map[w2[i]]) return true;
            if(map[w1[i]] > map[w2[i]]) return false;
        };
        return w1.length <= w2.length;
    };
    
    for(let i = 0; i < words.length - 1; i++){
        if(!isSorted(words[i], words[i + 1])) return false;
    };
    
    return true;
};