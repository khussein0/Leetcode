/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(letters.length === 1) return letters[0];
    let l = 0, r = letters.length;
    
    while(l <= r){
        const mid = (l + r) >>> 1;
        if(letters[mid] <= target) l = mid + 1;
        else r = mid - 1;
    };
    
    if(l === letters.length) return letters[0];
    return letters[l];
};