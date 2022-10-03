/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0, i = 0, j = height.length - 1;
    while(i < j){
        res = Math.max(res, Math.min(height[i], height[j]) * (j - i));
        height[i] > height[j] ? j-- : i++;
    };
    return res;
};