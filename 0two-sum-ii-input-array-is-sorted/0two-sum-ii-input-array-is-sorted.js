/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let s = 0, e = numbers.length - 1;
    while(numbers[s] + numbers[e] !== target){
        if(numbers[s] + numbers[e] > target) e--;
        else s++;
    };
    return [++s,++e];
};