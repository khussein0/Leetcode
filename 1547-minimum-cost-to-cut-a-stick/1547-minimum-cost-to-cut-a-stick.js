/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.push(0, n);
    cuts.sort((a,b) => a - b);
    const dp = [...Array(cuts.length)].map(() => [...Array(cuts.length)]);
    
    function build(i, j){
        if(j - i === 1) return 0;
        if(dp[i][j] !== undefined) return dp[i][j];
        for(let k = i + 1; k < j; k++) dp[i][j] = Math.min(dp[i][j] || Infinity, build(i, k) + build(k, j) + cuts[j] - cuts[i]);
        return dp[i][j];
    };
    
    return build(0, cuts.length - 1);
};