/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let map = {}, res = 0, rev = e => e.split('').reverse().join('');
    for(let i = 0; i < words.length; i++){
        if(map[words[i]]) res += 4, map[words[i]]--;
        else map[rev(words[i])] ? map[rev(words[i])]++ : map[rev(words[i])] = 1;
    };
    if(Object.keys(map).filter(e => map[e] && e === rev(e)).length) res += 2;
    return res;
};