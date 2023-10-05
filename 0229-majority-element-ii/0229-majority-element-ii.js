/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let cand1 = 0, cand2 = 1, count1 = 0, count2 = 0, res = [];
    
    for(const num of nums){
        if(num === cand1) count1++;
        else if(num === cand2) count2++;
        else if(count1 === 0){
            cand1 = num;
            count1 = 1;
        }else if(count2 === 0){
            cand2 = num;
            count2 = 1;
        }else{
            count1--;
            count2--;
        };
    };
    
    if(nums.filter(n => n === cand1).length > nums.length / 3) res.push(cand1);
    if(nums.filter(n => n === cand2).length > nums.length / 3) res.push(cand2);
    
    return res;
};