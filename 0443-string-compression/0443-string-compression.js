/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let res = 0, cur = chars[0], count = 0;
    
    for(let i = 0; i <= chars.length; i++){
        if(chars[i] === cur) count++;
        else{
            chars[res] = cur;
            if(count > 1){
                let s = count.toString();
                for(let j = 0; j < s.length; j++) chars[++res] = s[j];
            };
            res++;
            cur = chars[i];
            count = 1;
        };
    };
    return res;
};