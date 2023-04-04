/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let hash = {}, res = 1;
    
    for(let i = 0; i < s.length; i++){
        if(hash[s[i]]){
            res++;
            hash = {};
        };
        
        hash[s[i]] = 1;
    };
    
    return res;
};