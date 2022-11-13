/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let r = [], word = '';
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === ' '){
            word && r.unshift(word);
            word = '';
        }else{
            word += s.charAt(i);
        };
    }
    
    word && r.unshift(word);
    return r.join(' ');
};