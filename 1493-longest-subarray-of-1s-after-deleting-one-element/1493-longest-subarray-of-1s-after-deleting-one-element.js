/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let i = 0, j = 0, skip = 0, max = 1;
    
    while(j < nums.length){
        if(nums[j] === 0) skip++;
        while(skip === 2){
            if(nums[i] === 0) skip--;
            i++;
        };
        max = Math.max(max, j - i + 1);
        j++;
    };
    
    return max - 1;
};