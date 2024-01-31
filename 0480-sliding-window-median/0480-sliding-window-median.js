/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    let l = 0, r = k-1, res = [];
    const window = nums.slice(l,k);
    window.sort((a,b) => a - b);
    
    while(r < nums.length){
        const median = k % 2 === 0 ? (window[Math.floor(k/2) - 1] + window[Math.floor(k/2)]) / 2 : window[Math.floor(k/2)];
        res.push(median);
        
        let char = nums[l++], idx = binarySearch(window, char, 0, window.length-1);
        window.splice(idx,1);
        
        char = nums[++r];
        idx = binarySearch(window, char, 0, window.length-1);
        window.splice(idx, 0, char);
    }
    
    return res;
};

function binarySearch(arr, target, l, r){
    while(l < r){
        const mid = (l+r) >> 1;
        if(arr[mid] < target) l = mid + 1;
        else if(arr[mid] > target) r = mid;
        else return mid;
    }
    if(l === r) return arr[l] >= target ? l : l+1;
};