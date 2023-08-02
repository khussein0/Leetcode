/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, permutations = [], res = []) {
    if(!nums.length) res.push([...permutations]);
    
    for(let i = 0; i < nums.length; i++){
        permutations.push(nums[i]);
        const cur = nums.filter((num, idx) => idx !== i);
        permute(cur, permutations, res);
        permutations.pop();
    };
    
    return res;
};