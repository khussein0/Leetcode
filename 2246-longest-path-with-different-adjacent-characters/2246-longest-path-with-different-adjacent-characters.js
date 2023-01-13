/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    let n = parent.length, children = new Array(s), long = 0;
    
    for(let i = 0; i < n; i++) children[i] = new Array();
    for(let i = 1; i < n; i++) children[parent[i]].push(i);
    s = s.split('');
    
    function dfs(node){
        let longLen = 0, longLen2 = 0;
        for(let child of children[node]){
            let childLen = dfs(child);
            if(s[node] === s[child]) continue;
            if(longLen < childLen){
                longLen2 = longLen;
                longLen = childLen;
            }else if(longLen2 < childLen) longLen2 = childLen;
        }
        long = Math.max(long, longLen + longLen2 + 1);
        return longLen + 1;
    };
    dfs(0);
    return long;
};