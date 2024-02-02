/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/\s/g, '');
    let stack = [], n = 0, sign = '+';
    
    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(!isNaN(cur)) n = n * 10 + Number(cur);
        if(isNaN(cur) || i === s.length - 1){
            if(sign === '-') stack.push(-n);
            else if(sign === '+') stack.push(n);
            else if(sign === '*') stack.push(stack.pop() * n);
            else if(sign === '/') stack.push(~~(stack.pop() / n));
            
            sign = cur;
            n = 0;
        }
    }
    
    return stack.reduce((acc, cur) => acc + cur);
};