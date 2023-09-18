/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const res = mat.map((row, idx) => [row.reduce((a, b) => a + b), idx]);
    res.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return res.slice(0, k).map(([_, idx]) => idx);
};