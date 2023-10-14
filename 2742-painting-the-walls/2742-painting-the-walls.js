/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    const dp = new Array(cost.length + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    
    for(let i = 0; i < cost.length; i++){
        for(let j = cost.length; j > 0; --j){
            dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
        };
    };
    
    return dp[cost.length];
};