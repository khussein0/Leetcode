/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    
    function combine(arr = [], sum = 0, idx = 0){
        if(sum > target) return;
        if(sum === target) return res.push(arr);
        
        for(let i = idx; i < candidates.length; i++) combine([...arr, candidates[i]], sum + candidates[i], i);
    };
    
    combine();
    return res;
};