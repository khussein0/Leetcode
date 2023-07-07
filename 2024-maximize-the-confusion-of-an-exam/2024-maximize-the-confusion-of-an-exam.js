/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let [l, r, nTrue, nFalse, max] = new Array(5).fill(0);
    const moreChanges = () => nTrue > k && nFalse > k;
    
    while(r < answerKey.length){
        if(answerKey[r] === 'T') nTrue++;
        if(answerKey[r] === 'F') nFalse++;
        while(moreChanges()){
            if(answerKey[l] === 'T') nTrue--;
            if(answerKey[l] === 'F') nFalse--;
            l++;
        };
        max = Math.max(max, r - l + 1);
        r++;
    };
    
    return max;
};