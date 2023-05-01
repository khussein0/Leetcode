/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary), min = Math.min(...salary);
    let sum = salary.reduce((a,b) => a + b);
    
    sum -= max + min;
    
    return sum / (salary.length - 2);
};