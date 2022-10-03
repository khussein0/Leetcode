/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function backspace(str){
        let res = [];
        for(i of str.split('')) i === '#' ? res.pop() : res.push(i);
        return res.join('');
    };
    
    return backspace(s) === backspace(t);
};