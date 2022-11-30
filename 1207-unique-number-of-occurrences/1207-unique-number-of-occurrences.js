/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    for(let i of arr) map[i] = (map[i] || 0) + 1;
    let val = Object.values(map);
    let uVal = [...new Set(val)];
    return val.length === uVal.length;
};