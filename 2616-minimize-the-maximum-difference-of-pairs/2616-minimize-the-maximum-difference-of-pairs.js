/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a,b) => a - b);
    let l = 0, r = nums[nums.length - 1] - nums[0];
    
    while(l < r){
        let mid = (l + r) >> 1;
        if(makePairs(nums, mid, p)) r = mid;
        else l = mid + 1;
    };
    
    return l;
};

function makePairs(nums, mid, p){
    let count = 0;
    for(let i = 0; i < nums.length - 1 && count < p;){
        if(nums[i+1] - nums[i] <= mid){
            count++;
            i += 2;
        }else i++;
    };
    
    return count >= p;
};