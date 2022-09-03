/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let preSet = new Set([1,2,3,4,5,6,7,8,9]);
    
    for (let i = 2; i <= n; i++) {
        const newSet = new Set();
        
        for (const prevVal of preSet) {
            const lastDig = prevVal % 10;
            
            const plusK = lastDig + k;
            const minusK = lastDig - k;
            
            if (plusK < 10) newSet.add((prevVal * 10) + plusK);
            if (minusK >= 0) newSet.add((prevVal * 10) + minusK);
        }
        
        preSet = newSet;
    }

    return [...preSet];
};