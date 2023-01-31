/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let dp = scores.map((a, k) => [a, ages[k]]);
    dp.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]);
    let res = Array(scores.length).fill(0);
    
    for(let i = 0; i < scores.length; i++){
        for(let j = 0; j < scores.length; j++){
            if(dp[j][0] <= dp[i][0]) res[i] = Math.max(res[i], res[j]);
        };
        res[i] += dp[i][0];
    };
    
    return Math.max(...res);
};