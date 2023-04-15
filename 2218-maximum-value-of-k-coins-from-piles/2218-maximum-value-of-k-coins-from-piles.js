/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let dp = new Array(k + 1).fill(0);
    
    for(let i = 0; i < piles.length; i++){
        for(let j = k; j > 0; j--){
            let count = 0;
            for(let n = 1; n <= Math.min(j, piles[i].length); n++){
                count += piles[i][n - 1];
                dp[j] = Math.max(dp[j], dp[j-n] + count);
            };
        };
    };
    
    return dp[k];
};