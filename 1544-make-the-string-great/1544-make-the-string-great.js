/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [''];
    
    for(let char of s){
        let last = stack[stack.length - 1];
        if(last.toLowerCase() === char.toLowerCase() && last !== char) stack.pop();
        else stack.push(char);
    };
    
    return stack.join('');
};