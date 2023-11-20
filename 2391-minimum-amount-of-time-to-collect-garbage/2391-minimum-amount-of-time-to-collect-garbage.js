/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let pPos = -1, gPos = -1, mPos = -1, res = 0;
    
    for(let i = 1; i < travel.length; i++){
        travel[i] += travel[i-1];
    };
    
    for(let i = 0; i < garbage.length; i++){
        res += garbage[i].length;
        if(garbage[i].includes('P')) pPos = i;
        if(garbage[i].includes('G')) gPos = i;
        if(garbage[i].includes('M')) mPos = i;  
    };
    
    if(--pPos >= 0) res += travel[pPos];
    if(--gPos >= 0) res += travel[gPos];
    if(--mPos >= 0) res += travel[mPos];
    
    return res;
};