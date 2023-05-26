/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if(n === 0) return arr;
    const res = [];
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            const nested = flat(arr[i], n - 1);
            res.push(...nested);
        }else res.push(arr[i]);
    };
    
    return res;
};