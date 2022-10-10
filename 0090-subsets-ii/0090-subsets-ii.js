/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);
    let res = [];
    
    function backtrack(path, start = 0, arr = []){
        if(arr.length === path){
            res.push(arr.slice());
            return;
        };
        
        for(let i = start; i < nums.length; i++){
            if(i !== start && nums[i - 1] === nums[i]) continue;
            arr.push(nums[i]);
            backtrack(path, i + 1, arr);
            arr.pop();
        };
    };
        
    for(let path = 0; path <= nums.length; path++){
        backtrack(path)
    };
    
    return res;
};