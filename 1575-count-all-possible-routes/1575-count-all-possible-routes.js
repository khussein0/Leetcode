/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    let visited = new Map(), mod = 1e9+7;
    
    function dfs(cur, fuel){
        let id = `${cur},${fuel}`;
        if(!visited.has(id)){
            let paths = 0;
            if(cur === finish) paths++;
            for(let i = 0; i < locations.length; i++){
                if(i !== cur){
                    let remain = fuel - Math.abs(locations[cur] - locations[i]);
                    if(remain >= 0) paths += dfs(i, remain);
                };
            };
            visited.set(id, paths % mod);
        };
        return visited.get(id);
    };
    
    return dfs(start, fuel);
};