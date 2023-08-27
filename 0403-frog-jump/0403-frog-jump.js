/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const dp = new Array(stones.length).fill(0).map(() => new Array(stones.length).fill(false));
    dp[0][0] = true;
    
    for(let i = 1; i < stones.length; i++){
        for(let j = i - 1; j >= 0; j--){
            const diff = stones[i] - stones[j];
            if(diff > j + 1) break;
            dp[i][diff] = dp[j][diff-1] || dp[j][diff] || dp[j][diff+1];
            if(i === stones.length - 1 && dp[i][diff]) return true;
        };
    };
    
    return false;
};