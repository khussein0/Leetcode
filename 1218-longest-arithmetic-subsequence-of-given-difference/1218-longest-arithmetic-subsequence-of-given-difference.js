/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const map = new Map();
    let max = 0;
    
    for(const n of arr){
        const diff = n - difference;
        const len = (map.get(diff) ?? 0) + 1;
        map.set(n, len);
        max = Math.max(max, len);
    };
    
    return max;
};