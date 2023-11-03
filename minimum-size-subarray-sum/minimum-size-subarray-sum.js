/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0, sum = 0, res = 0;
    
    while(r < nums.length){
        sum += nums[r];
        while(sum >= target){
            if(res === 0 || res > r - l + 1) res = r - l + 1;
            sum -= nums[l];
            l++;
        };
        r++;
    };
    
    return res;
};