/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights), right = weights.reduce((a,b) => a + b);
    
    while(left < right){
        let mid = left + Math.floor((right - left) / 2), cur = 0, val = 1;
        for(let i = 0; i < weights.length; i++){
            if(cur + weights[i] > mid){
                val++;
                cur = weights[i];
            }else cur += weights[i];
        };
        if(val > days) left = mid + 1;
        else right = mid;
    };
    
    return left;
};