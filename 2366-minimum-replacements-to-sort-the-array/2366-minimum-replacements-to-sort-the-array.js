/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    let last = nums[nums.length - 1], res = 0;
    
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] > last){
            let t = Math.floor(nums[i] / last);
            if(nums[i] % last !== 0) t++;
            last = Math.floor(nums[i] / t);
            res += t - 1;
        }else{
            last = nums[i];
        };
    };
    
    return res;
};