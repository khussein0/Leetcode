/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negCount = nums.filter(n => n < 0).length;
    if(nums.includes(0)) return 0;
    return negCount % 2 === 0 ? 1 : -1;
};