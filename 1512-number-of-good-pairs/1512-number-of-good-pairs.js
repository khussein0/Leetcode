/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = {};
    let res = 0;
    
    for(let n of nums){
        if(map[n]){
            res += map[n];
            map[n]++;
        }else map[n] = 1;
    };
    
    return res;
};