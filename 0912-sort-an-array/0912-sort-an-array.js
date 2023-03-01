/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2), l = nums.slice(0, mid), r = nums.slice(mid);
    
    function merge(left , right){
        let res = [];
        
        while(left.length && right.length){
            if(left[0] <= right[0]) res.push(left.shift());
            else res.push(right.shift());
        };
        
        return [...res, ...left, ... right];
    };
    
    return merge(sortArray(l), sortArray(r));
};