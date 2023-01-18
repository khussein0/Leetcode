/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = maxFar = minSum = minFar = total = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        total += nums[i];
        maxFar = Math.max(nums[i], nums[i] + maxFar);
        maxSum = Math.max(maxFar, maxSum);
        minFar = Math.min(nums[i], nums[i] + minFar);
        minSum = Math.min(minFar, minSum);
    };
    
    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};