/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    let chars = new Set(s.split("")), max = 0;
    for(let l of chars){
        for(let r of chars){
            if(l === r) continue;
            let nL = 0, nR = 0, hasRight = false;
            for(let char of s){
                nL += char === l ? 1 : 0;
                nR += char === r ? 1 : 0;
                if(nR > 0 && nL > nR) max = Math.max(max, nL - nR);
                if(nL > nR && hasRight) max = Math.max(max, nL - nR - 1);
                if(nR > nL){
                    nL = 0;
                    nR = 0;
                    hasRight = true;
                };
            };
        };
    };
    
    return max;
};