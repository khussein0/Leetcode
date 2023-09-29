/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = null;
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            if(increasing === null) increasing = true;
            else if(increasing === false) return false; 
        }else if(nums[i] < nums[i-1]){
            if(increasing === null) increasing = false;
            else if(increasing === true) return false;
        };
    };
    
    return true;
};