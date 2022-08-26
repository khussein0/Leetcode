/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let res = n.toString().split("").sort().join("");
    for(let i = 0; i < 30; i++){
        if((1 << i).toString().split("").sort().join("") === res) return true;
    };
    return false;
};