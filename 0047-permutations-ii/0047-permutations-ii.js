/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums.sort((a,b) => a - b);
    
    function permute(cur, rem){
        if(!rem.length){
            res.push(cur);
            return;
        };
        
        for(let i = 0; i < rem.length; i++){
            if(i > 0 && rem[i] === rem[i - 1]) continue;
            else{
                cur.push(rem[i]);
                permute([...cur], [...rem.slice(0,i), ...rem.slice(i + 1)]);
                cur.pop();
            };
        };
    };
    
    permute([], nums);
    return res;
};