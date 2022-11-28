/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let obj = {}, res = [[], []];
    for(let i = 0; i < matches.length; i++){
        obj[matches[i][0]] = obj[matches[i][0]] || 0;
        obj[matches[i][1]] = (obj[matches[i][1]] || 0) + 1;
    };
    
    for(let player in obj){
        if(obj[player] === 0) res[0].push(player);
        if(obj[player] === 1) res[1].push(player);
    };
    
    return res;
};