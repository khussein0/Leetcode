/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    manager.forEach((_, idx) => timeNeeded(idx));
    
    function timeNeeded(i){
        if(manager[i] !== -1){
            informTime[i] += timeNeeded(manager[i]);
            manager[i] = -1;
        };
        return informTime[i];
    };
    
    return Math.max(...informTime);
};