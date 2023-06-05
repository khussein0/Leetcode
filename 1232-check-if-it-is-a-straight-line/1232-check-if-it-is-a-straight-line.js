/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x = coordinates[1][1] - coordinates[0][1],
        y = coordinates[1][0] - coordinates[0][0];
    
    return coordinates.every(i => x * (i[0] - coordinates[0][0]) - y * (i[1] - coordinates[0][1]) === 0);
};