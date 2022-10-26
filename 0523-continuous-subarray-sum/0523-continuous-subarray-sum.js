/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0, pre = 0, hash = new Set();
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(k != 0) sum %= k;
        if(hash.has(sum)) return true;
        hash.add(pre);
        pre = sum;
    };
    
    return false;
};