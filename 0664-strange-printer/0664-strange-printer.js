/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const len = s.length, dp = Array.from(Array(len), () => new Array(len).fill(0));
    
    for(let i = len-1; i >= 0; i--){
        dp[i][i] = 1;
        for(let j = i+1; j < len; ++j){
            dp[i][j] = dp[i][j-1] + 1;
            for(let k = i; k < j; ++k){
                if(s[k] === s[j]) dp[i][j] = Math.min(dp[i][j], dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0));
            };
        };
    };
    
    return dp[0][len-1];
};