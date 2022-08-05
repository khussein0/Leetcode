/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    for(let word in words){
        words[word] = reverse(words[word]);
    };
    return words.join(' ');
};

function reverse(word){
    let arr = word.split(''), st = 0, en = arr.length - 1;
    while(st < en){
        [arr[st], arr[en]] = [arr[en], arr[st]];
        st++;
        en--;
    };
    return arr.join(''); 
};
    