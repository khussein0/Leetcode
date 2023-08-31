/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const arr = new Array(n+1).fill(0);
    
    for(let i = 0; i < ranges.length; i++){
        if(ranges[i] === 0) continue;
        const l = Math.max(0, i - ranges[i]);
        arr[l] = Math.max(arr[l], i + ranges[i]);
    };
    
    let far = 0, end = 0, res = 0;
    
    for(let i = 0; i <= n; i++){
        if(i > end){
            if(far <= end) return -1;
            end = far;
            res++;
        };
        far = Math.max(far, arr[i]);
    };
    
    return res + (end < n ? 1 : 0);
};