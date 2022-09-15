/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if(changed.length % 2 === 1) return [];
    let res = [], obj = {};
    changed.sort((a,b) => a - b);
    
    for(let n of changed){
        let half = n / 2;
        if(obj[half] && obj[half] > 0){
            res.push(half);
            obj[half] = obj[half] - 1;
        }else obj[n] = (obj[n] || 0) + 1; 
    };
    
    if(res.length !== changed.length / 2) return [];
    
    return res;
};
