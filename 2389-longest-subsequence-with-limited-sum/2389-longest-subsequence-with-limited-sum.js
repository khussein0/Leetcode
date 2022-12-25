/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a - b);
    let res = [];
    
    for(let q of queries){
        let count = 0, sum = 0;
        for(let i = 0; i < nums.length; i++){
            if(sum + nums[i] <= q){
                sum += nums[i];
                count++;
            };
        };
        res.push(count);
    };
    return res;
};