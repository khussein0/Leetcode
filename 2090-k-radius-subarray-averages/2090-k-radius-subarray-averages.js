/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const avgs = new Array(nums.length).fill(-1);
    if(k >= nums.length / 2) return avgs;
    
    let l = 0, sum = 0;
    
    for(let r = 0; r < nums.length; r++){
        sum += nums[r];
        if(r - l + 1 === k * 2 + 1){
            const avg = Math.floor(sum / (k * 2 + 1));
            avgs[r - k] = avg;
            sum -= nums[l];
            l++;
        };
    };
    
    return avgs;
};