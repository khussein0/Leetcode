/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0, len = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            len++;
            res += len;
        }else len = 0;
    };
    return res;
};