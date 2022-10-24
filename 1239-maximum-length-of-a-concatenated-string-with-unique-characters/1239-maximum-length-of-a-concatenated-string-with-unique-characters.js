/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let res = 0;
    
    function backtrack(start, cur){
        if(cur.length !== new Set(cur.split('')).size) return;
        
        res = Math.max(res, cur.length);
        
        for(let i = start; i < arr.length; i++){
            backtrack(i + 1, `${cur}${arr[i]}`);
        };
    };
    
    backtrack(0, '');
    return res;
};