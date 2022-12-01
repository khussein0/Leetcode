/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = "aeiouAEIOU";
    let ans = 0, mid = s.length / 2;
    
    for(let i = 0, j = mid; i < mid; i++, j++){
        ans += vowels.includes(s.charAt(i)) - vowels.includes(s.charAt(j));
    };
    
    return ans === 0;
};