/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    if(weights.length === k) return 0;
    let getEdges = weights.map((n, i, a) => (i < a.length - 1 ? n + a[i + 1] : 0));
    getEdges = getEdges.slice(0, weights.length - 1);
    getEdges = getEdges.sort((a,b) => a - b);
    let max = getEdges.slice(getEdges.length - k + 1).reduce((a, b) => a + b, 0);
    let min = getEdges.slice(0, k - 1).reduce((a, b) => a + b, 0);
    return max - min;
};