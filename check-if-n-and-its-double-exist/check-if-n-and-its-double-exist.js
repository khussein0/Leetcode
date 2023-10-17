/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const set = new Set();
    
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])) return true;
        set.add(arr[i] / 2);
        set.add(arr[i] * 2);
    };
    
    return false;
};