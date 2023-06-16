/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    return (helper(nums) - 1n) % BigInt(1e9+7);
};

function combination(n, r){
    if(n < 2) return 1n;
    n = BigInt(n), r = BigInt(r);
    return factorial(n) / (factorial(n - r) * factorial(r));
};

const cache = new Map();
function factorial(n){
    
    if(n < 2) return 1n;
    if(cache.has(n)) return cache.get(n);
    const res = BigInt(n) * factorial(n - 1n);
    cache.set(n, res);
    return res;
};

function helper(nums){
    if(nums.length < 3) return 1n;
    const l = [], r = [];
    
    for(let i = 1; i < nums.length; ++i){
        if(nums[i] < nums[0]) l.push(nums[i]);
        if(nums[i] > nums[0]) r.push(nums[i]);
    };
    
    const comb = combination(nums.length - 1, l.length);
    return comb * helper(l) * helper(r);
}