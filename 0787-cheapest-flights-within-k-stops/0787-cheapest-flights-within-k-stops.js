/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = Array(n).fill().map((_, i) => i === src ? 0 : Infinity);
    
    for(let i = 0; i < k+1; i++){
        let price = [...prices];
        for(let [from, to, p] of flights){
            price[to] = Math.min(price[to], prices[from] + p);
        };
        prices = [...price];
    };
    
    return prices[dst] !== Infinity ? prices[dst] : -1;
};