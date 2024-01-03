/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0, prevSum = 0;
    
    for(const row of bank){
        const curSum = (row.match(/1/g)||[]).length;
        if(curSum > 0){
            res += curSum * prevSum;
            prevSum = curSum;
        };
    };
    
    return res;
};