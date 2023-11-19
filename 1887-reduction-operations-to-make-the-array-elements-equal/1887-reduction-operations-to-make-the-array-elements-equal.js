/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let res = 0;
    nums.sort((a,b) => a - b);
    
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]) res += nums.length - i - 1;
    };
    
    return res;
};