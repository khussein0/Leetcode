/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const mod = 1e9 + 7,
          moves = {   
            1: [6, 8],
            2: [7, 9],
            3: [4, 8],
            4: [3, 9, 0],
            6: [1, 7, 0],
            7: [2,6],
            8: [1, 3],
            9: [2, 4],
            0: [4, 6]
        };
    
    let prev = Array.from(Array(10), _ => 1),
        curr = Array.from(Array(10), _ => 0);
    
    for(let k = 2; k <= n; k++){
        for(let i = 0; i <= 9; i++){
            if(i === 5) continue;
            curr[i] = moves[i].reduce((acc, cur) => acc + prev[cur], 0) % mod;
        };
        
        prev = [...curr];
    };
    
    return prev.reduce((acc, cur) => acc + cur, 0) % mod;
};