/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let len = matchsticks.length, side = matchsticks.reduce((a,c) => a + c) / 4;
    matchsticks.sort((a,b) => b - a);
    if (side !== ~~side || matchsticks[0] > side) return false;
    
    function backtrack(i, space, solv){
        if(solv === 3) return true;
        for (; i < len; i++) {
            let num = matchsticks[i], res;
            if (num > space)
                continue;
            matchsticks[i] = side + 1;
            if (num === space)
                res = backtrack(1, side, solv+1);
            else
                res = backtrack(i+1, space-num, solv);
            if (res)
                return true;
            matchsticks[i] = num;
            while (matchsticks[i+1] === num)
                i++;
        }
        return false;
    }
    
    return backtrack(0, side, 0);
};