/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    max = Math.max(max, gain[0]);
    
    for(let i = 1; i < gain.length; i++){
        gain[i] += gain[i - 1];
        max = Math.max(max, gain[i]);
    };
    
    return max;
};