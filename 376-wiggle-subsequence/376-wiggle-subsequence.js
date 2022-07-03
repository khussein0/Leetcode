/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let len = nums.length, i = 1;
    while(nums[i] === nums[i-1]) i++;
    let diff = nums[i-1] > nums[i], ans = 1;
    for(; i < len; i++){
        if((diff && nums[i] < nums[i-1]) || (!diff && nums[i] > nums[i-1])){
            diff = !diff;
            ans++;
        }
    }
    return ans;
};