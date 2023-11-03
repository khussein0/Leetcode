/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a,b) => a - b).reduce((acc, cur, i) => (i % 2 === 0) ? acc + cur : acc, 0);
};