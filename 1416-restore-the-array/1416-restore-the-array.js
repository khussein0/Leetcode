/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
    let len = s.length, dp = new Array(len + 1).fill(0), char = s.split(""), mod = 1e9 + 7;
    dp[len] = 1;
    
    for(let i = len - 1; i >= 0; i--){
        if(char[i] == '0') continue;
        let str = "", j = i + 1;
        str += char[i];
        
        while(j <= len && parseInt(str) <= k){
            dp[i] += dp[j];
            dp[i] %= mod;
            if(j < len) str += char[j];
            j++;
        };
    };
    
    return parseInt(dp[0]);
};