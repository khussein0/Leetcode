/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(prices.length == 0) return 0;
    
    if(k > (prices.length / 2) ){
      let d_ik0 = 0;
      let d_ik1 = -Infinity;
      for(let i = 0; i < prices.length; i++){
        d_ik0 = Math.max(d_ik0, d_ik1 + prices[i]);
        d_ik1 = Math.max(d_ik1, d_ik0 - prices[i]);
      };
      return d_ik0;
    }else{
        let dp = [], size = prices.length;
        for(let i = 0; i < size; i++){
          dp[i] = [];
          for(let j = 0; j <= k; j++){
            dp[i][j] = []
            if(i-1 === -1 || j-1 === -1){
              dp[i][j][0] = 0;
              dp[i][j][1] = -prices[i];
              continue;
            };
            dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
          };
        };
      return dp[size-1][k][0];
    };
};