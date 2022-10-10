/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    
    function backtrack(path, index){
        res.push(path);
        for(let i = index; i < nums.length; i++){
            backtrack([...path, nums[i]], i + 1);
        };
    };
    
    backtrack([], 0);
    return res;
};

