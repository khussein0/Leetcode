/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let dp = new Array(n+1).fill(0);
    
    for(let [a,b] of trust){
        dp[a]--;
        dp[b]++;
    };
    
    for(let i = 1; i < dp.length; i++){
        if(dp[i] === n-1) return i;
    };
    
    return -1;
};