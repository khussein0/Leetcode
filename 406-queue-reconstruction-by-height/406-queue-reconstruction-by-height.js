/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    var res = [];
    people.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    people.forEach(p => {
        res.splice(p[1], 0, p);
    });
    return res;
};