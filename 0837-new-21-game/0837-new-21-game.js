/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if(k + maxPts <= n || k === 0) return 1;
    
    const dp = [];
    dp[0] = 1;
    dp[1] = 1 / maxPts;
    
    for(let i = 2; i <= n; i++){
        dp[i] = 0;
        
        if(i <= k) dp[i] = (1 + 1 / maxPts) * dp[i - 1];
        else dp[i] = dp[i - 1];
        
        if(i > maxPts) dp[i] -= dp[i - maxPts - 1] / maxPts;
    };
    
    return dp.reduce((acc, cur, i) => {
        if(i >= k) acc += cur;
        return acc;
    },0);
};