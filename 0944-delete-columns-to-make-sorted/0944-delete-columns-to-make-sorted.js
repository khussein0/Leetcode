/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let res = 0;
    
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 0; j < strs.length - 1; j++){
            if(strs[j].charAt(i) > strs[j + 1].charAt(i)){
                res++;
                break;
            };     
        };
    };
    
    return res;
};