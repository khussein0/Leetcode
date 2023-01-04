/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let map = {}, res = 0;
    
    for(let t of tasks) map[t] = map[t] + 1 || 1;
    
    for(let c of Object.values(map)){
        if(c < 2) return -1;
        res += Math.ceil(c / 3);
    };
    
    return res;
};