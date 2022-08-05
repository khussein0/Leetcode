/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let arr = new Array(target + 1).fill(0);
    arr[0] = 1;
    for(let i = 1; i <= target; i++){
        for(let num of nums){
            if(num <= i) arr[i] += arr[i - num];
        };
    };
    return arr[target];
};