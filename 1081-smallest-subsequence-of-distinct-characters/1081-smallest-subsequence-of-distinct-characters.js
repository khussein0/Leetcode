/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const stack = [], seen = new Set(), last = {};
    
    for(let i = 0; i < s.length; i++) last[s[i]] = i;
    
    for(let i = 0; i < s.length; i++){
        let cur = s[i];
        if(!seen.has(cur)){
            while(stack.length && cur < stack[stack.length - 1] && i < last[stack[stack.length - 1]]) seen.delete(stack.pop());
            seen.add(cur);
            stack.push(cur);
        };
    };
    
    return stack.join('');
};