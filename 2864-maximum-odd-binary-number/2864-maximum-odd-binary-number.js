/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let c1 = 0, c0 = 0;
    
    for(const n of s){
        if(n === '1') c1++;
        else c0++;
    }
    
    return '1'.repeat(c1-1) + '0'.repeat(c0) + '1';
};