/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    if(sum % 2 !== 0) return false;
    let half = sum / 2;
    
    const dp = new Array(half + 1).fill(0);
    
    for(let i = 0; i < nums.length; i++){
        for(let j = half; j >= nums[i]; j--){
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    
    return dp[half] === half;
};

