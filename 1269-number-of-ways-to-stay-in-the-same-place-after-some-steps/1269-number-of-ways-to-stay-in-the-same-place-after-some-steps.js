/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    const mod = 10**9 + 7, maxIdx = Math.min(Math.floor(steps / 2), arrLen - 1),
          dp = Array.from({ length: 2 }, () => Array(maxIdx + 1).fill(0));
    dp[0][0] = 1;
    
    for(let step = 1; step <= steps; step++){
        const cur = step % 2, prev = (step - 1) % 2;
        
        for(let idx = 0; idx <= maxIdx; idx++){
            dp[cur][idx] = dp[prev][idx] % mod;
            
            if(idx > 0) dp[cur][idx] = (dp[cur][idx] + dp[prev][idx - 1]) % mod;
            if(idx < maxIdx) dp[cur][idx] = (dp[cur][idx] + dp[prev][idx + 1]) % mod;
        };
    };
    
    return dp[steps % 2][0];
};