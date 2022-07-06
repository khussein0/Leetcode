/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    return (Math.pow(1 + Math.sqrt(5), n) - Math.pow(1 - Math.sqrt(5), n)) / Math.pow(2, n) / Math.sqrt(5);
};