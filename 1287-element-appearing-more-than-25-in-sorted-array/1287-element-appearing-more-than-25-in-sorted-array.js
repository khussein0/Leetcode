/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let sw = Math.floor(arr.length / 4);
    
    for(let i = 0; i < arr.length - sw; i++){
        if(arr[i] === arr[i+sw]) return arr[i];
    };
    
    return -1;
};