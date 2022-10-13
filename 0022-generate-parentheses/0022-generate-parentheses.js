/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    
    function generate(idx, open, s){
        if(idx === 2*n){
            let arr = new Array(2*n);
            for(let i = 0; i < 2 * n; i++) arr[i] = s & 1 << i ? "(" : ")";
            res.push(arr.join(""));
            return;
        };
        if(open) generate(idx + 1, open - 1, s);
        if(2*n - idx > open) generate(idx + 1, open + 1, s | 1 << idx);
    };
    
    generate(0,0,0);
    return res;
};