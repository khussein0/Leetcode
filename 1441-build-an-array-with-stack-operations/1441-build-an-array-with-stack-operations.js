/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let targetCount = 0, res = [];
    
    for(let i = 1; i <= n && i <= target[target.length-1]; i++){
        res.push("Push");
        if(target[targetCount] !== i) res.push("Pop");
        else targetCount++;
    };
    
    return res;
};