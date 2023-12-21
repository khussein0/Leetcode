/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins.sort((a,b) => a - b);
    let maxCoins = 0, addedCoins = 0;
    
    for(const coin of coins){
        while(coin > maxCoins + 1){
            maxCoins += maxCoins + 1;
            addedCoins++;
        };
        maxCoins += coin;
    };
    
    while(maxCoins < target){
        maxCoins += maxCoins + 1;
        addedCoins++;
    };
    
    return addedCoins;
};