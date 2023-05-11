/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    nums1 = [-1].concat(nums1);
    nums2 = [-1].concat(nums2);
    let [h, w] = [nums1.length, nums2.length];
    const dp = new Array(h).fill(0).map(() => new Array(w).fill(0));
    
    for(let y = 1 ; y < h ; y++){
        for(let x = 1 ; x < w ; x++){
            if(nums1[y] == nums2[x]) dp[y][x] = dp[y-1][x-1] + 1;   
            else dp[y][x] = Math.max(dp[y-1][x], dp[y][x-1]);
        };
    };
    
    return dp[h-1][w-1];
};