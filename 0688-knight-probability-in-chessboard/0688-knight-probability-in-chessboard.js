/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const dir = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]],
          memo = new Map();
    
    function findProb(kn, r, c){
        const key = `${kn}#${r}#${c}`;
        if(r < 0 || c < 0 || r >= n || c >= n) return 0.0;
        if(kn === 0) return 1.0;
        if(memo.has(key)) return memo.get(key);
        
        let prob = 0;
        
        for(const [x, y] of dir) prob += 0.125 * findProb(kn - 1, r + x, c + y);
        
        memo.set(key, prob);
        
        return prob;
    };
    
    return findProb(k, row , column);
};