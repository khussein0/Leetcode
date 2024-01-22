/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [,];
    
    for(let i = 0; i < nums.length; i++) nums[(nums[i] - 1) % 10000] += 10000;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 20000) res[0] = i+1;
        else if(nums[i] < 10001) res[1] = i+1;
    }
    
    return res;
};