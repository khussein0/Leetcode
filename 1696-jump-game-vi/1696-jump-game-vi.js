/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    let n = nums.length, deq = [n-1];
    for (let i = n - 2; i >= 0; i--) {
        if (deq[0] - i > k) deq.shift();
        nums[i] += nums[deq[0]];
        while (deq.length && nums[deq[deq.length-1]] <= nums[i]) deq.pop();
        deq.push(i);
    }
    return nums[0];
};