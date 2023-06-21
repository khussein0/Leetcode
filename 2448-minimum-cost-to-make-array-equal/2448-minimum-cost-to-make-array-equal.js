/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    nums = nums.map((n, i) => [n, cost[i]]).sort(([b], [a]) => b - a);
    let prefixSum = 0;
    
    const costSum = cost.reduce((acc, cur) => acc + cur);
    const [median] = nums.find(([_, cost]) => (prefixSum += cost) >= costSum / 2);
    
    return nums.reduce((acc, [num, cost]) => acc + Math.abs(num - median) * cost, 0);
};