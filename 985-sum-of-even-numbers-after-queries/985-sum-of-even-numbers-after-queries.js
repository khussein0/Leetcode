/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let res = [];
    for(let i = 0; i < queries.length; i++){
        nums[queries[i][1]] = nums[queries[i][1]] + queries[i][0];
        res.push(nums.reduce((a, c) => c % 2 ? a : a + c, 0));
    };
    return res;
};