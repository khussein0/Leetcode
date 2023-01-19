/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let dp = {}, count = 0, total = 0;
    dp[0] = 1;
    
    for(let num of nums){
        count = (count + num) % k;
        if(count < 0) count += k;
        if(dp[count]) total += dp[count];
        dp[count] = dp[count] ? dp[count] + 1 : 1;
    };
    
    return total;
};