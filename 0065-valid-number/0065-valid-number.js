/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let exp = false, sign = false, num = false, dec = false;
    
    for(let n of s){
        if(n >= '0' && n <= '9') num = true;
        else if(n === 'e' || n === 'E'){
            if(exp || !num) return false;
            else {
                exp = true;
                sign = false;
                num = false;
                dec = false;
            }
        }else if(n === '+' || n === '-'){
            if(sign || num || dec) return false;
            else sign = true;
        }else if(n === '.'){
            if(dec || exp) return false;
            else dec = true;
        }else return false;
    }
    
    return num;
};