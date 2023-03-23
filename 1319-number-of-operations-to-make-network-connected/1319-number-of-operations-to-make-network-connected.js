/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let graph = Array(n).fill(-1), extra = 0, not = n - 1;
    
    for(let [node, connection] of connections){
        if(find(node) !== find(connection)){
            union(node, connection);
            not--;
        }else extra++;
    };
    
    function find(node){
        if(graph[node] === -1) return node;
        graph[node] = find(graph[node]);
        return graph[node];
    };
    
    function union(node1, node2){
        let graph1 = find(node1), graph2 = find(node2);
        if(graph1 !== graph2) graph[graph2] = graph1;
    };
    
    return not <= extra ? not : -1;
};