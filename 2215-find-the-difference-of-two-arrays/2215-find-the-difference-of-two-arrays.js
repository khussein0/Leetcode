/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1), set2 = new Set(nums2);
    
    nums1.forEach(set2.delete, set2);
    nums2.forEach(set1.delete, set1);
    
    return[[...set1],[...set2]];
};