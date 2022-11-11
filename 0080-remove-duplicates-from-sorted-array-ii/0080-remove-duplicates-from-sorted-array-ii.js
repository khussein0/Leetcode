/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== nums[j + 2]){
            nums[i] = nums[j];
            i++;
        };
    };
    return i;
};