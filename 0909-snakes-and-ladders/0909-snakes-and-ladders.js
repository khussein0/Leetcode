/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length, set = new Set();
    
    function bfs(pos){
        let row = Math.floor((pos - 1) / n), col = (pos - 1) % n;
        col = row % 2 === 1 ? n - 1 - col : col;
        row = n - 1 - row;
        return[row,col];
    };
    
    let q = [[1,0]];
    while(q.length){
        [pos, mov] = q.shift();
        for(let i = 1; i < 7; i++){
            let newPos = pos + i, [r,c] = bfs(newPos);
            if(board[r][c] !== -1) newPos = board[r][c];
            if(newPos === n * n) return mov + 1;
            if(!set.has(newPos)){
                set.add(newPos);
                q.push([newPos, mov + 1]);
            };
        };
    };
    
    return -1;
};