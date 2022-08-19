/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let numFreq = {}, count = 0;
    
    for (let i = 0; i < arr.length; i++) numFreq[arr[i]] ? numFreq[arr[i]]++ : numFreq[arr[i]] = 1;

    let sortedFeq = Object.values(numFreq).sort((a, b) => b - a);

    for (let i = 0; i < sortedFeq.length; i++) {
        count += sortedFeq[i];
        if (count >= arr.length / 2) return i + 1;
    };
};