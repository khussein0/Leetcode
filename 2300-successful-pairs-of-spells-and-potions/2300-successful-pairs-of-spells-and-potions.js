/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let res = [];
    potions.sort((a,b) => a - b);
    
    for(let i = 0; i < spells.length; i++){
        let l = 0, r = potions.length - 1, mid;
        while(l <= r){
            mid = (l + r) >> 1;
            if(spells[i] * potions[mid] >= success) r = mid - 1;
            else l = mid + 1;
        };
        res[i] = potions.length - r - 1;
    };
    
    return res;
};