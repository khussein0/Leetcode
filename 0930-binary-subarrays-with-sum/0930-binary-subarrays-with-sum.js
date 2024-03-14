/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const map = new Map();
    map.set(0, 1);
    let curSum = 0, res = 0;
    
    for(let num of nums){
        curSum += num;
        if(map.has(curSum - goal)) res += map.get(curSum - goal);
        map.set(curSum, (map.get(curSum) || 0) + 1);
    }
    
    return res;
};