/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = new Map(), maxVal = 0, count = 0;
    
    for(let task of tasks){
        let tVal = map.has(task) ? map.get(task)+1 : 1;
        map.set(task, tVal);
        if(tVal > maxVal){
            maxVal = tVal;
            count = 1;
        }else if(tVal === maxVal) count++;
    }
    
    return Math.max(tasks.length, (maxVal-1) * (n+1) + count);
};