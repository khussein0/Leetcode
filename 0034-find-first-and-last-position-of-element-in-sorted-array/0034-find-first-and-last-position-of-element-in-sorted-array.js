/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function bSearch(nums, target, left = 0, right = nums.length - 1){
        while(left <= right){
            let mid = (left + right) >> 1;
            if(nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        };
        return left;
    };
    
    let l = bSearch(nums, target);
    if(nums[l] !== target) return [-1, -1];
    return [l, bSearch(nums, target+1, l) - 1];
};