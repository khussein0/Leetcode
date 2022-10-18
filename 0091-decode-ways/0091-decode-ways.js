/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;
    
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = dp[1] = 1;
    
    for(let i = 2; i <= s.length; i++){
        let num = Number(s.slice(i - 1, i));
        if(num >= 1 && num <= 9) dp[i] += dp[i - 1];
        
        let numm = Number(s.slice(i - 2, i));
        if(numm >= 10 && numm <= 26) dp[i] += dp[i - 2];
    };
    
    return dp[s.length];
};