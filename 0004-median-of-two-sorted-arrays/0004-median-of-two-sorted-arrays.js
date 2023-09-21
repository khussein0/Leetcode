/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    
    const m = nums1.length, n = nums2.length;
    let l = 0, r = m;
    
    while(l <= r){
        const partX = Math.floor((l+r) / 2),
              partY = Math.floor((m+n+1) / 2) - partX;
        
        const maxX = partX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partX-1],
              maxY = partY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partY-1];
        
        const minX = partX === m ? Number.MAX_SAFE_INTEGER : nums1[partX],
              minY = partY === n ? Number.MAX_SAFE_INTEGER : nums2[partY];
        
        if(maxX <= minY && maxY <= minX){
            if((m+n) % 2 === 0) return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            else return Math.max(maxX, maxY);
        }else if(maxX > minY) r = partX - 1;
        else l = partX + 1;
    };
};