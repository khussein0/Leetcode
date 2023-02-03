/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length < numRows) return s;
    
    let rows = Array(numRows).fill(''), rev = false, count = 0;
    
    for(let i = 0; i < s.length; i++){
        rows[count] += s[i];
        rev ? count-- : count++;
        if(count === numRows - 1 || count === 0) rev = !rev;
    };
    
    return rows.join('');
};