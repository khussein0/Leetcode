/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let idx = 0, max = 0, target = nums.length - 1;
    
    while(idx < nums.length){
        max = Math.max(max, idx + nums[idx]);
        if(max >= target) return true;
        if(max <= idx && nums[idx] === 0) return false;
        idx++;
    };
    
    return false;
};