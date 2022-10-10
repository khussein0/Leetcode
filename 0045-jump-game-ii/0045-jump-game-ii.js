/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let idx = 0, max = 0, cur = -1, t = nums.length - 1;
    
    for(let i = 0; max < t; i++){
        if(i > cur){
            idx++;
            cur = max;
        };
        
        max = Math.max(max, nums[i] + i);
    };
    return idx;
};