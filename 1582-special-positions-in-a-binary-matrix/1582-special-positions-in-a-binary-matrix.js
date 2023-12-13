/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const row = mat.length, col = mat[0].length;
    let res = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(mat[i][j] === 1){
                if(checkSpecial(i,j)) res++;
            };
        };
    };
    
    function checkSpecial(r, c){
        for(let i = 0; i < row; i++){
            if(mat[i][c] !== 0 && i !== r) return false;
        };
        
        for(let j = 0; j < col; j++){
            if(mat[r][j] !== 0 && j !== c) return false;
        };
        
        return true;
    };  
        
    return res;
};
    