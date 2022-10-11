/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let fMin = nums[0], sMin = Infinity;
    for(let num of nums){
        if(num <= fMin) fMin = num;
        else if(num <= sMin) sMin = num;
        else return true;
    };
    return false;
};