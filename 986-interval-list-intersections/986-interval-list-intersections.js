/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let a = 0, b = 0, res = [];
    
    while(a < firstList.length && b < secondList.length){
        let maxStart = Math.max(firstList[a][0], secondList[b][0]);
        let maxEnd = Math.min(firstList[a][1], secondList[b][1]);
        
        if(maxStart <= maxEnd) res.push([maxStart, maxEnd]);
        
        if(firstList[a][1] < secondList[b][1]) a++;
        else b++;
    };
    
    return res;
};