/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const deg = Array(n).fill(0);
    roads.forEach(([a, b]) => {
        deg[a]++;
        deg[b]++;
    });
    
    let unique = [...new Set(deg)].sort((a, b) => b - a),
        maxDeg = unique[0],
        max2 = unique.length > 1 ? unique[1] : 0,
        maxCount = deg.filter(d => d === maxDeg).length,
        maxCount2 = deg.filter(d => d === max2).length;
    
    if(maxCount > 1){
        let direct = roads.filter(([u, v]) => deg[u] === maxDeg && deg[v] === maxDeg).length,
            possible = maxCount * (maxCount - 1) / 2;
        return possible === direct ? 2 * maxDeg - 1 : 2 * maxDeg;
    };
    
    let direct2 = roads.filter(([u, v]) => (deg[u] === maxDeg && deg[v] === max2) || (deg[u] === max2 && deg[v] === maxDeg)).length;
    
    return maxCount2 === direct2 ? maxDeg + max2 - 1 : maxDeg + max2;
};