/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    return nums.reduce((acc, cur) => acc + cur) - nums.length * Math.min(...nums);
};