/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let mod = 1e9 + 7, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let small = arr[i];
        for (let j = i; j < arr.length; j++) {
            small = Math.min(small, arr[j]);
            sum += small;
        };
    };

    return sum % mod;
};