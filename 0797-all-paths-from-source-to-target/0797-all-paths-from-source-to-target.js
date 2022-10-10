/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let t = graph.length - 1, res = [];
    
    function dfs(node, path){
        path.push(node);
        if(node === t){
            res.push(path);
            return;
        };
        
        for(let n of graph[node]){
            dfs(n, [...path]);
        };
    };
    
    dfs(0, []);
    return res;
};