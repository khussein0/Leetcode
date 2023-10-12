/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    const len = mountainArr.length();
    let peakIdx = 0, l = 0, r = len;
    
    while(l < r){
        const mid = (l + r) >> 1;
        if(mountainArr.get(mid) < mountainArr.get(mid + 1)) l = peakIdx = mid + 1;
        else r = mid;
    };
    
    l = 0, r = peakIdx - 1;
    
    while(l <= r){
        const mid = (l + r) >> 1;
        if(mountainArr.get(mid) === target) return mid;
        else if(mountainArr.get(mid) < target) l = mid + 1;
        else r = mid - 1;
    };
    
    l = peakIdx, r = len - 1;
    
    while(l <= r){
        const mid = (l + r) >> 1;
        if(mountainArr.get(mid) === target) return mid;
        else if(mountainArr.get(mid) > target) l = mid + 1;
        else r = mid - 1;
    };
    
    return -1;
};