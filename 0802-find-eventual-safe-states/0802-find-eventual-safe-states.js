/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const res = new Array(graph.length).fill(0), safeNodes = [];
    
    function dfs(node){
        if(res[node] !== 0) return res[node] === 2;
        res[node] = 1;
        for(let neighbor of graph[node]){
            if(res[neighbor] === 1 || !dfs(neighbor)) return false;
        };
        res[node] = 2;
        return true;
    };
    
    for(let i = 0; i < graph.length; i++){
        if(dfs(i)) safeNodes.push(i);
    };
    
    return safeNodes;
};