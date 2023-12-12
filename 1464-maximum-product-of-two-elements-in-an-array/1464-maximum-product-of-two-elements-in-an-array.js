/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = 0;
    
    for(let i = 0, j = nums.length - 1; i < j;){
        res = Math.max(res, (nums[i] - 1) * (nums[j] - 1));
        nums[i] > nums[j] ? j-- : i++;
    };
    
    return res;
};