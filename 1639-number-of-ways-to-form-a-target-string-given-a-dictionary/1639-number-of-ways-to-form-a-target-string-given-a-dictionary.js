/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
   let mod = 1e9 + 7, m = words.length, n = words[0].length;
   const freq = Array.from({length: n}, () => Array(26).fill(0));
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++) freq[i][words[j].charCodeAt(i) - 97]++;
    };
    
    const dp = Array(target.length + 1).fill(0);
    dp[0] = 1;
    
    for(let i = 0; i < n; i++){
        for(let j = target.length; j > 0; j--){
            dp[j] += dp[j - 1] * freq[i][target.charCodeAt(j - 1) - 97];
            dp[j] %= mod;
        };
    };
    
    return dp[target.length];
};