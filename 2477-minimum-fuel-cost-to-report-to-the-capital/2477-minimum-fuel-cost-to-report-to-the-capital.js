/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    let adjList = createAdjList(roads), res = 0;
    
    function dfs(curNode, preNode){
        let rep = 1;
        for(let node of adjList[curNode]){
            if(node !== preNode) rep += dfs(node, curNode);
        };
        if(curNode) res += Math.ceil(rep / seats);
        return rep;
    };
    
    dfs(0, -1);
    return res;
};

function createAdjList(edges){
    let len = edges.length, adjList = new Array(len + 1).fill().map(() => []);
    
    for(let [node1, node2] of edges){
        adjList[node1].push(node2);
        adjList[node2].push(node1);
    };
    
    return adjList;
}