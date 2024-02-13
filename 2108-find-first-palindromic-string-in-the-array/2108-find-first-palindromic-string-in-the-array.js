/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++){
        if(isPalindrome(words[i])) return words[i];
    }
    
    return '';
};

function isPalindrome(str){
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
};