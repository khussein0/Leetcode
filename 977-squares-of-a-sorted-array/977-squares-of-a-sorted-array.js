/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = [], l = 0, r = nums.length - 1;
    while(l <= r){
        if(nums[l] ** 2 > nums[r] ** 2) res.push(nums[l++] ** 2);
        else res.push(nums[r--] ** 2);
    };
    return res.reverse();
};