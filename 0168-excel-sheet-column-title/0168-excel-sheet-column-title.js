/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = '';
    
    while(columnNumber > 0){
        let rem = columnNumber % 26, d = parseInt(columnNumber / 26);
        if(rem === 0){
            rem = 26;
            d = d - 1;
        };
        res = String.fromCharCode(64 + rem) + res;
        columnNumber = d;
    };
    
    return res;
};