/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort((a,b) => a - b);
    
    function combine(sum, cur, idx){
        if(sum === target){
            res.push([...cur]);
            return;
        };
        
        for(let i = idx; i < candidates.length; i++){
            if(i !== idx && candidates[i] === candidates[i - 1]) continue;
            if(sum > target) return;
            cur.push(candidates[i]);
            combine(sum + candidates[i], cur, i+1);
            cur.pop();
        };
    };
    
    combine(0, [], 0);
    return res;
};