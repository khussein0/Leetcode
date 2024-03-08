/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = new Map();
    
    for(const num of nums){
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    const maxFreq = Math.max(...freq.values());
    const maxFreqElements = [...freq.keys()].filter(num => freq.get(num) === maxFreq);
    
    return maxFreq * maxFreqElements.length;
};