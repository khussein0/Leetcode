/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [], t = 0;
    if(nums.length < 3) return res;
    nums.sort((a,b) => a - b);
    
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] > t) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        let j = i + 1, k = nums.length - 1;
        
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === t) {
            res.push([nums[i], nums[j], nums[k]]);
            
            while (nums[j] === nums[j + 1]) j++;
			while (nums[k] === nums[k - 1]) k--;
            
            j++;
            k--;
            }else if(sum < t) j++;
            else k--;
        };
    };
    
    return res;
};