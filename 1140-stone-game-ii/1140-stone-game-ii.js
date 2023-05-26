/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const len = piles.length, memo = new Map(), sum = new Array(len).fill(0);
    sum[len - 1] = piles[len - 1];
    
    for(let i = len - 2; i >= 0; i--) sum[i] = sum[i + 1] + piles[i];
    
    function findMax(idx, max){
        const key = `${idx}#${max}`;
        if(len - idx <= max * 2) return sum[idx];
        if(memo.has(key)) return memo.get(key);
        
        let res = Number.MIN_SAFE_INTEGER;
        
        for(let i = 1; i <= max * 2; i++){
            const newMax = Math.max(max, i);
            res = Math.max(res, sum[idx] - findMax(idx + i, newMax));
        };
        
        memo.set(key, res);
        return res;
    };
    
    return findMax(0, 1);
};