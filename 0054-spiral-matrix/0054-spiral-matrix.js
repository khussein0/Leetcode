/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const row = matrix.length, col = matrix[0].length, res = [];
    let left = 0, top = 0, right = col - 1, bot = row - 1;
    
    while(left <= right && top <= bot){
        for(let i = left; i <= right; i++) res.push(matrix[top][i]);
        top++;
        
        for(let i = top; i <= bot; i++) res.push(matrix[i][right]);
        right--;
        
        if(left <= right && top <= bot){
            for(let i = right; i >= left; i--) res.push(matrix[bot][i]);
            bot--;
        };
        
        if(left <= right && top <= bot){
            for(let i = bot; i >= top; i--) res.push(matrix[i][left]);
            left++;
        };
    };
    
    return res;
};