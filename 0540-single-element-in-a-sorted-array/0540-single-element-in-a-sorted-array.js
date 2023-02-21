/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums.length === 1) return nums[0];
    
    function bSearch(left, right){
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === nums[mid - 1]) return mid % 2 ? bSearch(mid + 1, right) : bSearch(left, mid);
        if(nums[mid] === nums[mid + 1]) return mid % 2 ? bSearch(left, mid - 1) : bSearch(mid, right);
        return nums[mid];
    };
    
    return bSearch(0, nums.length - 1);
};