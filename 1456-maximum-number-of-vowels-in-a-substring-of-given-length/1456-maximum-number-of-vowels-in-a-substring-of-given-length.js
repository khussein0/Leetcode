/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let max = 0, start = 0, count = 0;
    
    for(let end = 0; end < s.length; end++){
        if(vowels.includes(s[end])) count++;
        if(end - start + 1 > k){
            if(vowels.includes(s[start])) count--;
            start++;
        };
        max = Math.max(max, count);
        if(max === k) return max;
    };
    
    return max;
};