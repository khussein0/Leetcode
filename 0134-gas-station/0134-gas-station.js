/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let cur = 0, total = 0, pos = 0;
    
    for(let i = 0; i < gas.length; i++){
        cur += gas[i] - cost[i];
        total += gas[i] - cost[i];
        if(cur < 0){
            cur = 0;
            pos = i+1;
        };
    };
    
    return total < 0 ? -1 : pos;
};