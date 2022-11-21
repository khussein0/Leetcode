/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]], m = maze.length, n = maze[0].length;
    let[ey, ex] = entrance;
    maze[ey][ex] = '-';
    
    let q = [[ey, ex, 0]];
    while(q.length){
        let [y, x, step] = q.shift();
        
        for(let [dy, dx] of dir){
            let ny = y + dy, nx = x + dx, nStep = step + 1;
            if(ny < 0 || nx < 0 || ny >= m || nx >= n || maze[ny][nx] === '-' || maze[ny][nx] === '+') continue;
            if(ny === 0 || ny === m - 1 || nx === 0 || nx === n - 1) return nStep;
            
            maze[ny][nx] = '-';
            q.push([ny, nx, nStep]);
        };
    };
    return -1;
};