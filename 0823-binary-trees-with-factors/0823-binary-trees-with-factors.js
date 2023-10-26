/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const mod = 10**9 + 7;
    arr.sort((a,b) => a - b);
    const set = new Set(arr), map = {};
    
    for(const n of arr) map[n] = 1;
    
    for(const i of arr){
        for(const j of arr){
            if(j > Math.sqrt(i)) break;
            if(i % j === 0 && set.has(i / j)){
                map[i] += (i / j === j ? map[j] * map[j] : map[j] * map[i/j] * 2);
                map[i] %= mod;
            };
        };
    };
    console.log(map);
    return Object.values(map).reduce((acc, cur) => (acc + cur) % mod, 0);
};

