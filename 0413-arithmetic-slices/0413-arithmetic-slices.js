/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let sum = 0, dp = Array(nums.length).fill(0);

	for (var i = 2; i <= dp.length - 1; i++) {
		if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
			dp[i] = 1 + dp[i - 1];
			sum += dp[i];
		};
	};

	return sum;
};