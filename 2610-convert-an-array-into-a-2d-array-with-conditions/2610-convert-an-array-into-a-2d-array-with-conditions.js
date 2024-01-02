/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const freq = new Array(nums.length+1).fill(0), res = [];
    
    for(const n of nums){
        if(freq[n] >= res.length) res.push([]);
        res[freq[n]].push(n);
        freq[n]++;
    };
    
    return res;
};