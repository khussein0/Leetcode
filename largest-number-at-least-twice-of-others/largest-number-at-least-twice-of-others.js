/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const largest = Math.max(...nums),
          needToFind = largest / 2,
          found = nums.find(n => n !== largest && n > needToFind);
    
    return found ? -1 : nums.indexOf(largest);
};