/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b) => a - b);
    let res = 0;
    
    for(let i = 0; i < satisfaction.length; i++){
        let cur = 0;
        for(let j = i; j < satisfaction.length; j++) cur += satisfaction[j] * (j - i + 1);
        if(cur > res) res = cur;
    };
    
    return res;
};