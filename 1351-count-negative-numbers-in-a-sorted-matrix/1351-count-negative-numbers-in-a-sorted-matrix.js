/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.flat().filter(n => n < 0).length;
};