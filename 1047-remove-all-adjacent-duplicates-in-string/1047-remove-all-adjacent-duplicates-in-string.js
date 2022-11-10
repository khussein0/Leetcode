/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for(let c of s) c === stack[stack.length - 1] ? stack.pop() : stack.push(c);
    return stack.join('');
}; 