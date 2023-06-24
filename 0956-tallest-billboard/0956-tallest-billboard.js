/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    const dp = {0:0};
    
    for(let rod of rods){
        let cur = {...dp};
        for(let h in cur){
            h = parseInt(h);
            dp[h+rod] = Math.max(dp[h+rod] || 0, cur[h]);
            dp[Math.abs(h-rod)] = Math.max(dp[Math.abs(h-rod)] || 0, cur[h] + Math.min(h, rod));
        };
    };
    
    return dp[0] || 0;
};