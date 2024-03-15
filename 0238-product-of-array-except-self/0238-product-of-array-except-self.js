/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let l = 1, lArr = [], r = 1, rArr = [];
    
    for(let i = 0; i < nums.length; i++){
        lArr[i] = l;
        l *= nums[i];
    };
    
    for(let i = nums.length - 1; i >= 0; i--){
        rArr[i] = r;
        r *= nums[i];
        rArr[i] *= lArr[i];
    };
    
    return rArr;
};