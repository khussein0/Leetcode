/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let res = -1;
    
    for(let i = 2; i < num.length; i++){
        if(num[i-2] === num[i-1] && num[i-2] === num[i]){
            res = Math.max(res, parseInt(num[i]));
        };
    };
    
    return res === -1 ? "" : String(res).repeat(3);
};