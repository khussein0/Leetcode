/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a,b) => a - b);
    let res = [];
    
    for(let i = 2; i < nums.length; i += 3){
        if(nums[i-1] - nums[i-2] > k || nums[i] - nums[i-1] > k || nums[i] - nums[i-2] > k) return [];
        else res.push([nums[i-2], nums[i-1], nums[i]]);
    }
    
    return res;
};