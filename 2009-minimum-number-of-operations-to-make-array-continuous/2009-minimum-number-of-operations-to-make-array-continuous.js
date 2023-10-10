/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    nums.sort((a,b) => a - b);
    let len = nums.length, res = Number.MAX_SAFE_INTEGER;
    nums = [...new Set(nums)];
    
    for(let i = 0; i < len; i++){
        let cur = nums[i], t = cur + len - 1, idx = binarySearch(nums, t);
        res = Math.min(res, len - (idx - i));
    };
    
    return res;
};

function binarySearch(nums, target){
    let l = 0, r = nums.length - 1;
    
    while(l <= r){
        let mid = (l + r) >> 1;
        if(nums[mid] <= target) l = mid + 1;
        else r = mid - 1;
    };
    
    return l;
}