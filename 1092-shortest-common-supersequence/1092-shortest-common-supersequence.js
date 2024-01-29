/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    let row = str1.length, col = str2.length, res = '';
    const dp = Array(row+1).fill().map(() => Array(col+1).fill(0));
    
    for(let i = 1; i <= row; i++){
        for(let j = 1; j <= col; j++){
            if(str1[i-1] === str2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    
    while(row > 0 && col > 0){
        if(str1[row-1] === str2[col-1]){
            res += str1[row-1];
            row--;
            col--;
            continue;
        }
        
        if(dp[row-1][col] > dp[row][col-1]){
            res += str1[row-1];
            row--;
        }else{
            res += str2[col-1];
            col--;
        }
    }
    
    while(row > 0){
        res += str1[row-1];
        row--;
    }
    
    while(col > 0){
        res += str2[col-1];
        col--;
    }
    
    return res.split('').reverse().join('');
};