/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length, start = Array(len).fill(1), end = Array(len).fill(1), sum = 0;
    
    for(let i = 1; i < len; i++){
        if(ratings[i] > ratings[i - 1]) start[i] = start[i - 1] + 1;
    }
    
    for(let i = len - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1]) end[i] = end[i + 1] + 1;
    }
    
    for(let i = 0; i < len; i++){
        sum += Math.max(start[i], end[i]);
    }
    
    return sum;
};