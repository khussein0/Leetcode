/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const map = new Array(n).fill(0), res = [];
    edges.forEach(([f, t]) => map[t]++);
    map.forEach((node, i) => !node && res.push(i));
    return res;
};