/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    events = events.map(([s,e,v],i) => [s,e,v,i]);
    let n = events.length, dp = [...Array(k+1)].map(d => [...Array(n+1)].map(d => 0)),
        z = [...events].sort((a,b) => a[1] - b[1]);
    
    for(let i = 1; i <= k; i++){
        let idxZ = 0, opt = 0;
        for(let j = 1; j <= n; j++){
            let [start, end, val, idx] = events[j-1];
            while(idxZ < n && z[idxZ][1] < start){
                let origIdx = z[idxZ][3];
                if(dp[i-1][origIdx+1] > opt) opt = dp[i-1][origIdx+1];
                idxZ++;
            };
            dp[i][j] = Math.max(val + opt, dp[i][j]);
        };
    };
    
    return Math.max(...dp[k]);
};