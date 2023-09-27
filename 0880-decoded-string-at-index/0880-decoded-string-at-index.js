/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let len = 0, i = 0;
    
    while(len < k){
        if(!isNaN(s[i])) len *= Number(s[i]);
        else len++;
        i++;
    };
    
    for(let j = i - 1; j >= 0; j--){
        if(!isNaN(s[j])){
            len /= Number(s[j]);
            k %= len;
        }else{
            if(k === 0 || k === len) return s[j];
            len--;
        };
    };
    
    return "";
};