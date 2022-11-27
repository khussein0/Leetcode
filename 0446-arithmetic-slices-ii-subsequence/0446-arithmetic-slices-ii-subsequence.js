/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let dp = new Array(nums.length), ans = 0;
    for(let i = 0; i < nums.length; i++) dp[i] = new Map();
    
    for(let j = 1; j < nums.length; j++){
        for(let i = 0; i < j; i++){
            let diff = nums[i] - nums[j];
            if(diff > (Math.pow(2, 31) - 1) || diff < (-Math.pow(2, 31) - 1)) continue;
            let endI = dp[i].get(diff) || 0, endJ = dp[j].get(diff) || 0;
            dp[j].set(diff, (endI + endJ + 1));
            ans += endI;
        };
    };
    return ans;
};