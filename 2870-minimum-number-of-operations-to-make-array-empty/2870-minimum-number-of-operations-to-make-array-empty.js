/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const map = {};
    let res = 0;
    
    for(const num of nums){
        map[num] = (map[num] || 0) + 1;
    }
    
    for(const val of Object.values(map)){
        if(val === 1) return -1;
        res += Math.ceil(val / 3);
    };
    
    return res;
};