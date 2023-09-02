/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const dp = Array(s.length+1).fill(s.length+1), set = new Set(dictionary);
    dp[0] = 0;
    
    for(let i = 1; i <= s.length; ++i){
        dp[i] = dp[i-1] + 1;
        for(let j = 1; j <= i; ++j){
            if(set.has(s.substring(i - j, i))) dp[i] = Math.min(dp[i], dp[i-j]);
        };
    };
    
    return dp[s.length];
};