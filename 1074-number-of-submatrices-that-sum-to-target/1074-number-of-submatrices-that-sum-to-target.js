/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let ans = 0, res = new Map();
    
    for(let i = 0, r = matrix[0]; i < m; r = matrix[++i]){
        for(let j = 1; j < n; j++){
            r[j] += r[j-1];
        }
    }
    
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            let csum = 0;
            res.clear();
            res.set(0,1);
            for(let k = 0; k < m; k++){
                csum += matrix[k][j] - (i ? matrix[k][i-1] : 0);
                ans += (res.get(csum - target) || 0);
                res.set(csum, (res.get(csum) || 0) + 1);
            }
        }
    }
    
    return ans;
};