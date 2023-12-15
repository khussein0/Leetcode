/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const map = new Map(paths);
    
    for(const dest of map.values()){
        if(!map.has(dest)) return dest;
    }
};