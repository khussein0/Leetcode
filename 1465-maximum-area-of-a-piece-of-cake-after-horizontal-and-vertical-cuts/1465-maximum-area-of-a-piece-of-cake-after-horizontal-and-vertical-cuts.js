/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a,b) => a - b);
    verticalCuts.sort((a,b) => a - b);
    let maxH = Math.max(horizontalCuts[0], (h - horizontalCuts[horizontalCuts.length - 1])),
        maxV = Math.max(verticalCuts[0], (w - verticalCuts[verticalCuts.length - 1]));
    
    for(var i = 1; i < Math.max(verticalCuts.length, horizontalCuts.length); i++){
        if(verticalCuts[i] && verticalCuts.length > 1){
            maxV = Math.max(maxV, (verticalCuts[i] - verticalCuts[i - 1]));
        }
        if(horizontalCuts[i] && horizontalCuts.length > 1){
            maxH = Math.max(maxH, (horizontalCuts[i] - horizontalCuts[i - 1]))
        }
    }
    
    return BigInt(maxH) * BigInt(maxV) % 1000000007n
};