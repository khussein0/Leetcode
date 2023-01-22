/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let part = [], res = [];
    
    function backtrack(str, p, r){
        if(str.length === 0){
            r.push([...p]);
            return;
        };
        
        for(let i = 1; i <= str.length; i++){
            let pre = str.substring(0, i), post = str.substring(i);
            if(isPalindrome(pre)){
                p.push(pre);
                backtrack(post, p, r);
                p.pop();
            };
        };
        return;
    };
    
    backtrack(s, part, res);
    return res;
};

const isPalindrome = str => (str === str.split('').reverse().join(''));