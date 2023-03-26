/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    let visited = new Set(), res = -1;
    
    for(let i = 0; i < edges.length; i++){
        let map = new Map();
        let curLen = dfs(edges, visited, map, i, 0);
        if(curLen > res) res = curLen;
    };
    
    return res;
};

function dfs(edges, visited, map, idx, len){
    if(map.has(idx)) return len - map.get(idx);
    if(visited.has(idx)) return -1;
    
    map.set(idx, len);
    visited.add(idx);
    
    if(edges[idx] >= 0) return dfs(edges, visited, map, edges[idx], len + 1);
    map.delete(idx);
}