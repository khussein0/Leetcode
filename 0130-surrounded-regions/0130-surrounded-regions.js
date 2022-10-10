/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length === 0) return null;
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 'O' && (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1)) dfs(board, i, j);
        };
    };
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 'V')board[i][j] = 'O';
            else board[i][j] = 'X';
        };
    };
    return board;
};


function dfs(mat, row, col){
    if(row < 0 || col < 0 || row >= mat.length || col >= mat[0].length || mat[row][col] === 'X' || mat[row][col] === 'V') return;
    
    mat[row][col] = 'V';
    dfs(mat,row+1,col);
    dfs(mat,row-1,col);
    dfs(mat,row,col+1);
    dfs(mat,row,col-1);
    return;
};