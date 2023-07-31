/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let dp = new Array(s2.length+1).fill(0);
    
    for(let i = 1; i <= s2.length; i++) dp[i] = dp[i-1] + s2.charCodeAt(i-1);
    
    for(let i = 1; i <= s1.length; i++){
        let cur = [dp[0] + s1.charCodeAt(i-1)];
        for(let j = 1; j <= s2.length; j++){
            if(s1[i-1] === s2[j-1]) cur.push(dp[j-1]);
            else cur.push(Math.min(dp[j] + s1.charCodeAt(i-1), cur[cur.length-1] + s2.charCodeAt(j-1)));
        };
        dp = cur;
    };
    
    return dp[dp.length - 1];
};