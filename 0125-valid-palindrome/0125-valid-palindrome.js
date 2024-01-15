/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
};