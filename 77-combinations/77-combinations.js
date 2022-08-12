/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n === 1 && k === 1) return [[1]];
    let out = [];
    function comb(curr, start, out){
        if(curr.length === k) return out.push(Array.from(curr));
        for(let i = start; i <= n; i++){
            curr.push(i);
            comb(curr, i+1, out);
            curr.pop();
        };
    };
    
    comb([], 1, out);
    return out;
};