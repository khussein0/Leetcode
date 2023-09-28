/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const res = [];
    
    while(nums.length){
        let cur = nums.pop();
        if(cur % 2 === 0) res.unshift(cur);
        else res.push(cur);
    };
    
    return res;
};