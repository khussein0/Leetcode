/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let totalSum = 0, idx = 1, min = Infinity, total = 0;
    
    for(let i = 0; i < nums.length; i++) totalSum += nums[i];
    
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
        let first = total / (i + 1);
        let second = (totalSum - total) / (nums.length - i - 1) || 0;
        let absValue = Math.abs(Math.floor(first) - Math.floor(second));
        
        if(absValue < min){
            min = absValue;
            idx = i;
        };
    };
    
    return idx;
};