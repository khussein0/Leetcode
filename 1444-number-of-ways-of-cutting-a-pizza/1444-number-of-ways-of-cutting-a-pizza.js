/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
    let row = pizza.length, col = pizza[0].length, apple = 'A', memo = {};
    
    function dfs(slice, sRow, sCol){
        if(sRow >= row || sCol >= col) return 0;
        
        let key = [slice, sRow, sCol].join('-');
        if(memo[key]) return memo[key];
        
        if(slice === 1){
            for(let i = sRow; i < row; i++){
                for(let j = sCol; j < col; j++){
                    if(pizza[i][j] === apple) return memo[key] = 1;
                };
            };
            return memo[key] = 0;
        };
        
        let total = 0, gotApple = false;
        slice--;
        
        for(let i = sRow; i < row; i++){
            for(let j = sCol; j < col && !gotApple; j++){
                if(pizza[i][j] === apple) gotApple = true;
            };
            
            if(gotApple) total += dfs(slice, i + 1, sCol);
        };
        
        gotApple = false;
        for(let j = sCol; j < col; j++){
            for(let i = sRow; i < row && !gotApple; i++){
                if(pizza[i][j] === apple) gotApple = true;
            };
            if(gotApple) total += dfs(slice, sRow, j + 1);
        };
        
        return memo[key] = total % 1000000007;
    };
    
    return dfs(k, 0, 0);
};