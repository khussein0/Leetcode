/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.split('/').filter(d => d.length > 0 && d !== '.');
    let stack = [];
    for(let i of path){
        if(i === '..') stack.pop();
        else stack.push(i);
    };
    return `/${stack.join('/')}`;
};