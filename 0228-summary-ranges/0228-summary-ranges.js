/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    let i = 0;
    
    for(let j = 0; j < nums.length; j++){
        if(nums[j+1] === nums[j] + 1) continue;
        else{
            if(i === j) res.push(nums[i] + "");
            else res.push(nums[i] + "->" + nums[j]);
            i = j + 1;
        };
    };
    
    return res;
};