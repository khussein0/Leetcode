/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let l = 0, r = arr.length - 1;
    
    while(arr[l] < arr[l+1] || arr[r] < arr[r-1]){
        if(arr[l] < arr[l+1]) ++l;
        if(arr[r] < arr[r-1]) --r;
    };
    
    if(l !== r || l === arr.length - 1 || r === 0) return false;
    
    return true;
};