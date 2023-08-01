/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n === 1 && k === 1) return [[1]];
    let res = [];
    
    function comb(cur, start, res){
        if(cur.length === k) return res.push(Array.from(cur));
        
        for(let i = start; i <= n; i++){
            cur.push(i);
            comb(cur, i+1, res);
            cur.pop();
        };
    };
    
    comb([], 1, res);
    return res;
};