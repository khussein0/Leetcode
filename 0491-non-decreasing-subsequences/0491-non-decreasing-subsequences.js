/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = [], map = {};
    
    function backtrack(idx, tmp){
        if(map[tmp]) return;
        if(tmp.length >= 2) res.push(tmp);
        for(let i = idx; i < nums.length; i++){
            if(tmp[tmp.length - 1] > nums[i]) continue;
            map[tmp] = true;
            backtrack(i+1, [...tmp, nums[i]]);
        };
    };
    
    backtrack(0, []);
    return res;
};