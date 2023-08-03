/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const obj = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"};
    
    if(!digits.length) return [];
    let res = [];
    
    function combine(str, idx){
        if(idx === digits.length) res.push(str);
        else{
            let letters = obj[digits[idx]];
            for(let i = 0; i < letters.length; i++) combine(str + letters[i], idx + 1);
        };
    };
    
    combine('', 0);
    return res;
};