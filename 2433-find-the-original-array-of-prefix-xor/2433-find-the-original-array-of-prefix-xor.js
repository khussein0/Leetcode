/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let cur = pref[0];
    
    for(let i = 1; i < pref.length; i++){
        pref[i] ^= cur;
        cur ^= pref[i];
    };
    
    return pref;
};