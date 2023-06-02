/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    if(bombs.length <= 1) return bombs.length;
    let adj = {}, max = 0;
    
    for(let i = 0; i < bombs.length; i++){
        for(let j = i + 1; j < bombs.length; j++){
            if(!adj[i]) adj[i] = [];
            if(!adj[j]) adj[j] = [];
            let bomb1 = bombs[i], bomb2 = bombs[j];
            let first = checkInsideRange(bomb1[0], bomb1[1], bomb2[0], bomb2[1], bomb1[2]);
            if(first) adj[i].push(j);
            let second = checkInsideRange(bomb1[0], bomb1[1], bomb2[0], bomb2[1], bomb2[2]);
            if(second) adj[j].push(i);
        };
    };
    
    function dfs(node, visited){
        let boom = 1;
        visited[node] = true;
        let children = adj[node] || [];
        for(let child of children){
            if(visited[child]) continue;
            boom += dfs(child, visited);
        };
        max = Math.max(max, boom);
        return boom;
    };
    
    for(let i = 0; i < bombs.length; i++) dfs(i, {});
    
    return max;
};

function checkInsideRange(x, y, cX, cY, rad){
    return((x - cX)**2 + (y - cY)**2 <= rad**2);
};