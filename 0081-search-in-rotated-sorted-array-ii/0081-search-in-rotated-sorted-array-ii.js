/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    
    while(l <= r){
        let mid = (l + r) >> 1;
        
        if(nums[mid] === target) return true;
        if(nums[l] === nums[mid]){
            l++;
            continue;
        };
        if(nums[l] <= nums[mid]){
            if(nums[l] <= target && target <= nums[mid]) r = mid - 1;
            else l = mid + 1;
        }else{
            if(nums[mid] <= target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        };
    };
    
    return false;
};