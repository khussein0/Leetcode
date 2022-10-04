/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0;
    let r = 0, l = 0, res = 0, product = 1;
    
    while(r < nums.length){
        product *= nums[r];
        while(product >= k){
            product /= nums[l];
            l++;
        };
        res += r - l + 1;
        r++;
    };
    return res;
};