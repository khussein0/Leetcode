/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, permutations = [], answer = []) {
    if(nums.length === 0){
        answer.push([...permutations]);
    }
    for(let i = 0; i < nums.length; i++){
        permutations.push(nums[i]);
        const choices = nums.filter((num, index) => index !== i);
        permute(choices, permutations, answer);
        permutations.pop();
    }
    return answer;
};