/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const dp = new Array(s.length).fill(0).map(() => Array(s.length).fill(null));
    
    function helper(start, end){
        if(start >= end) return 0;
        if(s[start] === s[end]) return helper(start + 1, end - 1);
        if(dp[start][end] !== null) return dp[start][end];
        let left = 1 + helper(start + 1, end), right = 1 + helper(start, end - 1);
        let min = Math.min(left, right);
        dp[start][end] = min;
        return min
    };
    
    return helper(0, s.length - 1);
};