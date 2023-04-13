/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [], i = 0;
    
    for(let n of pushed){
        stack.push(n);
        while(stack.length && stack[stack.length - 1] === popped[i]){
            stack.pop();
            i++;
        };
    };
    
    return pushed.length === i;
};