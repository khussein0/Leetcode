/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Number.MAX_VALUE, free = 0, last = 0, now = 0;
    
    for(let i = 0; i < prices.length; i++){
        now = Math.max(last, prices[i] - buy);
        buy = Math.min(buy, prices[i] - free);
        free = last;
        last = now;
    };
    
    return now;
};