/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let adjList = new Map(), visited = new Set();
    
    for(let [v, u] of edges){
        if(!adjList.has(v)) adjList.set(v, []);
        if(!adjList.has(u)) adjList.set(u, []);
        adjList.get(v).push(u);
        adjList.get(u).push(v);
    };
    
    let q = [source];
    while(q.length > 0){
        let node = q.shift();
        if(node === destination) return true;
        visited.add(node);
        adjList.get(node).forEach(neighbor => {
            if(!visited.has(neighbor)) q.push(neighbor);
        });
    };
    
    return false;
};