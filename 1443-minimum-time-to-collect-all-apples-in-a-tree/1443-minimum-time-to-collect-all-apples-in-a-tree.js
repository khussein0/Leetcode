/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let map = {}, res = 0;
    
    for(let edge of edges){
        if(map[edge[1]] !== undefined) map[edge[0]] = edge[1];
        else map[edge[1]] = edge[0];
    };
    
    for(let i = 0; i < hasApple.length; i++){
        if(!hasApple[i]) continue;
        let p = i;
        while(p !== 0 && map[p] >= 0){
            let temp = map[p];
            map[p] = -1;
            p = temp;
            res += 2;
        };
    }
    
    return res;
};