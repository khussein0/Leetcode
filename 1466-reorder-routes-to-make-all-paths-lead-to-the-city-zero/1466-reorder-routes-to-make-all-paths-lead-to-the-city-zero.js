/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let graph = new Array(n).fill().map(() => []), set = new Set(), res = 0;
    
    for(let [a, b] of connections){
        graph[a].push(b);
        graph[b].push(a);
        set.add(`${a}-${b}`);
    };
    
    function dfs(node, parent){
        if(set.has(`${parent}-${node}`)) res++;
        
        for(let con of graph[node]){
            if(con === parent) continue;
            dfs(con, node);
        };
    };
    
    dfs(0, -1);
    return res;
};