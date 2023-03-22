/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    let map = new Array(n + 1).fill().map(() => []), visited = new Set([]);
    
    for(let [a, b, distance] of roads){
        map[a].push([b, distance]);
        map[b].push([a, distance]);
    };
    
    let q = [1], res = Infinity;
    visited.add(1);
    
    while(q.length){
        let node = q.shift();
        for(let [next, dist] of map[node]){
            res = Math.min(res, dist);
            if(visited.has(next)) continue;
            visited.add(next);
            q.push(next);
        };
    };
    
    return res;
};