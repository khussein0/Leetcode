/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const weeks = parseInt(n / 7),
          days = n % 7,
          weekMoney = 7 * ((3 * weeks) + (weeks* (weeks+1) / 2)),
          dayMoney = ((days * (days + 1)) / 2) + weeks * days;
    
    return weekMoney + dayMoney;
};