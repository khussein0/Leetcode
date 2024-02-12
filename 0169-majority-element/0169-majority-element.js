/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, res = 0;
    
    for(const num of nums){
        if(count === 0) res = num;
        count += (res === num) ? 1 : -1;
    }
    
    return res;
};