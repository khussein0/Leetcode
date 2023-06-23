/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const dp = new Array(nums.length).fill(0).map(() => new Map());
    let res = 1;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            let diff = nums[i] - nums[j];
            dp[i].set(diff, dp[j].get(diff) + 1 || 2);
            res = Math.max(res, dp[i].get(diff));
        };
    };
    
    return res;
};