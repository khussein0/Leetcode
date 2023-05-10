/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0)), len = n * n;
    let count = 0, left = 0, top = 0, right = n - 1, bot = n - 1;
    
    while(count < len){
        for(let i = left; i <= right; i++){
            count++;
            res[top][i] = count;
        };
        top++;
        
        for(let i = top; i <= bot; i++){
            count++;
            res[i][right] = count;
        };
        right--;
        
        for(let i = right; i >= left; i--){
            count++;
            res[bot][i] = count;
        };
        bot--;
        
        for(let i = bot; i >= top; i--){
            count++;
            res[i][left] = count;
        };
        left++;
    };
    
    return res;
};