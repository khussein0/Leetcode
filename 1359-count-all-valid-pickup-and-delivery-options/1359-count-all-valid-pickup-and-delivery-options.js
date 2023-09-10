/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const mod = 1e9 + 7;
    let res = 1;
    
    for(let i = 2; i <= n; i++) res = (res * (2*i-1) * i) % mod;
    
    return res;
};