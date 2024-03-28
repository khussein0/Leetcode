/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = {};
    let res = 0, i = 0, j = 0;
    
    while(j < nums.length){
        freq[nums[j]] = (freq[nums[j]] || 0) + 1;
        while(freq[nums[j]] > k){
            freq[nums[i]]--;
            i++;
        }
        res = Math.max(res, j - i + 1);
        j++;
    }
    
    return res;
};