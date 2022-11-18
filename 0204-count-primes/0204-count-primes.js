/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let prime = new Uint8Array(n), ans = 0;
    
    for(let i = 2; i < n; i++){
        if(prime[i]) continue;
        ans++;
        for(let j = i * i; j < n; j += i) prime[j] = 1;
    };
    return ans;
};