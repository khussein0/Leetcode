/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    let map1 = new Array(edges.length).fill(-1),
        map2 = new Array(edges.length).fill(-1),
        max = Infinity, res = -1;
    
    function dfs(idx, map){
        let seen = new Set(), len = 0;
        while(idx !== -1){
            map[idx] = len++;
            seen.add(idx);
            if(seen.has(edges[idx])) break;
            idx = edges[idx];
        };
    };
    
    dfs(node1, map1);
    dfs(node2, map2);
    
    for(let i = 0; i < edges.length; i++){
        if(map1[i] === -1 || map2[i] === -1) continue;
        if(Math.max(map1[i], map2[i]) < max){
            max = Math.max(map1[i], map2[i]);
            res = i;
        };
    };
    
    return res;
};