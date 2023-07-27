/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    batteries.sort((a,b) => a - b);
    let l = 1, r = Math.floor(batteries.reduce((a, b) => a + b) / n);
    
    while(l < r){
        let mid = r - Math.floor((r - l) / 2),
            total = batteries.reduce((a,b) => a + Math.min(b, mid), 0);
        if(total >= mid * n) l = mid;
        else r = mid - 1;
    };
    
    return l;
};