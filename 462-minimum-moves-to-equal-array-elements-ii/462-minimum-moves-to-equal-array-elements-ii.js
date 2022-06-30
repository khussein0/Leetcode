/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b) => a - b);
    let ans = 0, median = nums[~~(nums.length / 2)];
    for (let i = 0; i < nums.length; i++) ans += Math.abs(median - nums[i]);
    return ans;
};