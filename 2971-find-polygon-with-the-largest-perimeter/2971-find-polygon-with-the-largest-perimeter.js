/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a - b);
    let cur = nums[0] + nums[1], res = -1;
    
    for(let i = 2; i < nums.length; i++){
        if(nums[i] < cur) res = cur + nums[i];
        cur += nums[i];
    }
    
    return res;
};