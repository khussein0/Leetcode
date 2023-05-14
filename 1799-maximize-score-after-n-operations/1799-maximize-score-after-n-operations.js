/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    const n = nums.length / 2, len = nums.length;
    const memo = Array(1 << len).fill(-1);
  
    function dp(i, mask) {
        if (i === n + 1) return 0;
        if (memo[mask] !== -1) return memo[mask];
    
        let res = 0;
        for (let j = 0; j < len; j++) {
            if ((mask >> j) & 1) continue;
            for (let k = j + 1; k < len; k++) {
                if ((mask >> k) & 1) continue;
                let score = i * gcd(nums[j], nums[k]), newMask = mask | (1 << j) | (1 << k);
                res = Math.max(res, dp(i + 1, newMask) + score);
            };
        };
        return memo[mask] = res;
    };
  
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    };
    
    return dp(1, 0);
};