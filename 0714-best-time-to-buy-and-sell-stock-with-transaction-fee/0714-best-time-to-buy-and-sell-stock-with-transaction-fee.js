/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let buy = 0, sell = -prices[0];
    
    for(let i = 1; i < prices.length; i++){
        buy = Math.max(buy, sell + prices[i] - fee);
        sell = Math.max(sell, buy - prices[i]);
    };
    
    return buy;
};