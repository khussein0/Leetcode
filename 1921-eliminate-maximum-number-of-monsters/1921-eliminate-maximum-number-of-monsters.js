/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let reach = dist.map((d,i) => d / speed[i]);
    
    reach.sort((a,b) => a - b);
    
    for(let i = 0; i < reach.length; i++){
        if(reach[i] <= i) return i;
    };
    
    return reach.length;
};