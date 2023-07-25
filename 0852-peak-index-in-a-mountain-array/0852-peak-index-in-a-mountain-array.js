/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr, l = 0, r = arr.length - 1) {
    if(!arr.length) return -1;
    const mid = ((l + r) >> 1) | 0;
    
    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    if(arr[mid] < arr[mid - 1]) return peakIndexInMountainArray(arr, l, mid);
    if(arr[mid] < arr[mid + 1]) return peakIndexInMountainArray(arr, mid, r);
};