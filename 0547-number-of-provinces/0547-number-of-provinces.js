/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited = new Set(), res = 0;
    
    for(let i = 0; i < isConnected.length; i++){
        if(!visited.has(i)){
            res++;
            dfs(i);
        };
    };
    
    return res;
    
    function dfs(node){
        for(let i = 0; i < isConnected.length; i++){
            if(isConnected[node][i] === 1 && !visited.has(i)){
                visited.add(node);
                dfs(i);
            };
        };
    };
};

