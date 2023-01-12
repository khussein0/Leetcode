/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    let arr = Array.from(Array(n), ()=> new Array()), cArr = new Array(26).fill(0);
    
    for(let [a,b] of edges){
        arr[a].push(b);
        arr[b].push(a);
    };
    
    let res = new Array(n).fill(0);
    
    function dfs(idx, prev, cur){
        let total = cur[labels.charCodeAt(idx) - 97];
        cur[labels.charCodeAt(idx) - 97]++;
        
        for(let i of arr[idx]){
            if(i === prev) continue;
            dfs(i, idx, cur);
        };
        res[idx] = cur[labels.charCodeAt(idx) - 97] - total;
    };
    
    dfs(0, -1, cArr);
    return res;
};