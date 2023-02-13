/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    return ((high % 2 === 0 && low % 2 === 0) ? 0 : 1) + Math.floor((high - low) / 2);
};