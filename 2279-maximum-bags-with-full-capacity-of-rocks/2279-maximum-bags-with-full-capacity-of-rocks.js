/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let res = 0;
    
    for(let i = 0; i < capacity.length; i++) capacity[i] -= rocks[i];
    capacity.sort((a,b) => a - b);
    
    for(let i = 0; i < capacity.length; i++){
        if(additionalRocks == 0 || capacity[i] > additionalRocks) break;
        additionalRocks -= capacity[i];
        res++;
    };
    
    return res;
};