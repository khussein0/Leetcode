/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    if (n > target || n * k < target) return 0;
    let arr = new Array(k).fill(1), depth = n;
    while (depth > 1) { 
        tempArr = [];
        for (let i = 0; i < arr.length + k - 1 && i <= target - n; i++) { 
            let val = ((tempArr[i - 1] || 0) + (arr[i] || 0) - (arr[i - k] || 0)) % (1000000007);
            tempArr.push(val);
        };
        arr = tempArr;
        depth -= 1;
    }
    let ans = arr[target - n];
    return ans < 0 ? ans + 1000000007 : ans;
};