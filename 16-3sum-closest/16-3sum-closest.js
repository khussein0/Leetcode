/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let res = Infinity;
    for (let i=0;i<nums.length-2;i++) {
        let l = i+1, r = nums.length-1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
            if (sum > target) r--;
            else l++;
        };
    };
    return res;
};