/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    let arr = s.split(''), start = 0, end = s.length - 1;
    while(start < end){
        if(vowels.includes(arr[start]) && vowels.includes(arr[end])){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }else if(vowels.includes(arr[start])) end--;
        else start++;
    };
    return arr.join('');
};