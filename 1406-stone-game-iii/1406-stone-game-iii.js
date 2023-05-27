/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const dp = new Array(stoneValue.length).fill(-Infinity);
    
    for(let i = stoneValue.length; i >= 0; i--){
        let points = 0;
        for(let j = 1; j <= 3; j++){
            if(i + j > stoneValue.length) break;
            points += stoneValue[i + j - 1];
            dp[i] = Math.max(dp[i], points - (dp[i + j] || 0));
        };
    };
    
    if(dp[0] === 0) return 'Tie';
    if(dp[0] > 0) return 'Alice';
    return 'Bob';
};