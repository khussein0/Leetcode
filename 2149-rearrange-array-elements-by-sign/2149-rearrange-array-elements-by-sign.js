/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const res = new Array(nums.length);
    let pos = 0, neg = 1;
    
    for(const num of nums){
        if(num > 0){
            res[pos] = num;
            pos += 2;
        }else{
            res[neg] = num;
            neg += 2;
        }
    }
    
    return res;
};