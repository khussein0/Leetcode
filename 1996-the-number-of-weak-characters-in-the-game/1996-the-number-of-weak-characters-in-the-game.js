/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    properties.sort((a,b) => b[0] - a[0] || a[1] - b[1]);
    let res = 0, max = 0;
    for(let i = 0; i < properties.length; i++){
        properties[i][1] < max ? res++ : max = properties[i][1];
    };
    return res;
};