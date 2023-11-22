/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const res = [];
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            const num = nums[i][j];
            if(!num) continue;
            const cur = res[i+j];
            cur ? cur.unshift(num) : res[i+j] = [num];
        };
    };
    
    return res.flat();
};