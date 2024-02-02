/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const digits = '123456789', minLen = low.toString().length, maxLen = high.toString().length;
    let res = [];
    
    for(let win = minLen; win <= maxLen; win++){
        for(let i = 0; i + win <= digits.length; i++){
            const num = parseInt(digits.substring(i, i+win));
            if(num >= low && num <= high) res.push(num);
        }
    }
    
    return res;
};