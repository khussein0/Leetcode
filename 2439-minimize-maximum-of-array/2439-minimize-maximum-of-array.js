/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let res = 0, sum = 0;
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        res = Math.max(res, Math.ceil(sum / (i+1)));
    };
    
    return res;
};