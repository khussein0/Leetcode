/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height === null || height.length === 0) return 0;
    
    let l = 0, r = height.length - 1, lMax = 0, rMax = 0, res = 0;
    
    while(l < r){
        lMax = Math.max(lMax, height[l]);
        if(lMax > height[l]) res += lMax - height[l];
        
        rMax = Math.max(rMax, height[r]);
        if(rMax > height[r]) res += rMax - height[r];
        
        height[r] > height[l] ? l++ : r--;
    };
    
    return res;
};