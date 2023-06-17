/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    arr2.sort((a,b) => a - b);
    const memo = {};
    
    function bs(arr, target){
        let l = 0, r = arr.length, mid;
        while(l < r){
            mid = (l + r) >> 1;
            arr[mid] > target ? r = mid : l = mid + 1;
        };
        return l;
    };
    
    function dfs(idx, prev){
        if(idx >= arr1.length) return 0;
        let k = `${idx},${prev}`;
        if(k in memo) return memo[k];
        let j = bs(arr2, prev);
        let swap = j < arr2.length ? dfs(idx+1, arr2[j]) + 1 : Infinity;
        let noSwap = arr1[idx] > prev ? dfs(idx+1, arr1[idx]) : Infinity;
        return memo[k] = Math.min(swap, noSwap);
    };
    
    const res = dfs(0, -Infinity);
    return res === Infinity ? -1 : res;
};