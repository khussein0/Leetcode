/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(wordDict  === null || wordDict.length === 0) return false;
    
    const set = new Set(wordDict), dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for(let i = 1; i <= s.length; i++){
        for(let j = 0; j < i; j++){
            const w = s.slice(j, i);
            if(dp[j] === true && set.has(w)){
                dp[i] = true;
                break;
            };
        };
    };
    
    return dp[s.length];
};