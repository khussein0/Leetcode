/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    function permute(str, pos, out = [], curr = ''){
        if(pos === str.length || curr.length === str.length) out.push(curr);
        else{
            if(isChar(str[pos])){
                let up = curr + str[pos].toUpperCase();
                let low = curr + str[pos].toLowerCase();
                permute(str, pos+1, out, up);
                permute(str, pos+1, out, low);
            }else{
                permute(str, pos+1, out, curr + str[pos]);
            };
        };
        return out;
    };
    
    function isChar(l){
        return /[a-zA-Z]/i.test(l);
    };
    
    return permute(s,0);
};