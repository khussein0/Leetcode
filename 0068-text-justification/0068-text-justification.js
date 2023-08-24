/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const res = [];
    let cur = [], count = 0;
    
    for(let i = 0; i < words.length; i++){
        if(words[i].length + cur.length + count > maxWidth){
            for(let j = 0; j < maxWidth - count; j++) cur[j % (cur.length - 1 || 1)] += ' ';
            
            res.push(cur.join(''));
            cur = [];
            count = 0;
        };
        cur.push(words[i]);
        count += words[i].length;
    };
    
    let last = cur.join(' ');
    while(last.length < maxWidth) last += ' ';
    res.push(last);
    
    return res;
};