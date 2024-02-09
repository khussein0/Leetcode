/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b) => a - b);
    const groupSize = new Array(nums.length).fill(1),
          prevElement = new Array(nums.length).fill(-1),
          res = [];
    let maxIdx = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] % nums[j] === 0 && groupSize[i] < groupSize[j] + 1){
                groupSize[i] = groupSize[j] + 1;
                prevElement[i] = j;
            }
        }
        if(groupSize[i] > groupSize[maxIdx]) maxIdx = i;
    }
    
    for(let i = maxIdx; i !== -1; i = prevElement[i]){
        res.unshift(nums[i]);
    }
    
    return res;
};