/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let min = Math.floor(maxSum/n), max = maxSum;
    
    function within(num){
        const l = findSum(num, index + 1), r = findSum(num, n - index);
        return maxSum >= l + r - num;
    };
    
    while(min <= max){
        const mid = (min + max) >> 1;
        within(mid) ? min = mid + 1 : max = mid - 1;
    };
    
    return max;
};

function findSum(num, len){
    if(len < num) return len * (num + num - len + 1) / 2;
    return num * (num + 1) / 2 + (len - num);
};