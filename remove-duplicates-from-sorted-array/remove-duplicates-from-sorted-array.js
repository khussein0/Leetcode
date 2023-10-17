/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cur = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(cur === nums[i]){
            nums.splice(i, 1);
            i--;
        }else cur = nums[i];
    };
    
    return nums.length;
};