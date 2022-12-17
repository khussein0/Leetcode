/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let ops = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => ~~(a / b)
    };
    
    for(let t of tokens){
        if(ops[t]){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(ops[t](b, a));
        }else stack.push(~~t)
    };
    
    return stack[0];
};