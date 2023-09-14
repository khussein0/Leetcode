/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};
    
    for(const [src, dest] of tickets){
        if(!graph[src]) graph[src] = [];
        graph[src].push(dest);
    };
    
    for(const key in graph) graph[key].sort().reverse();
    
    const res = [];
    
    function dfs(node){
        while(graph[node] && graph[node].length > 0) dfs(graph[node].pop());
        res.push(node);
    };
    
    dfs("JFK");
    return res.reverse();
};