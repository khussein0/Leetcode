/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    let mod = Math.pow(10,9) + 7, dp = new Array(n).fill(0);
    
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;
    
    for(let i = 4; i <= n; i++) dp[i] = (2 * dp[i-1] + dp[i-3]) % mod;
    
    return dp[n];
};