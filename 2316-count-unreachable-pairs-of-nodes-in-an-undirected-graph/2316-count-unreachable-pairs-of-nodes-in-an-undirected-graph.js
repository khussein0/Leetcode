/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    let unionArr = Array.from({ length: n }, (_, i) => i), freqMap = {};
    edges.forEach(([e1, e2]) => union(e1, e2));

    for (let i = 0; i < unionArr.length; i++) unionArr[i] = find(i)

    for (let i = 0; i < unionArr.length; i++) {
        let parentIdx = unionArr[i];

        if (parentIdx === -1) freqMap[i] = 1;
        else if (freqMap[parentIdx]) freqMap[parentIdx]++;
        else freqMap[parentIdx] = 1;
    };

    let values = Object.values(freqMap), count = 0;

    for (let i = 0; i < values.length; i++) {
        const cur = values[i];

        for (let j = i + 1; j < values.length; j++) {
            let otherGroupNodeCount = values[j];
            count += cur * otherGroupNodeCount;
        };
    };

    return count;
    
    function union(c1, c2) {
        let p1 = find(c1), p2 = find(c2);
        if (p1 != p2) unionArr[p1] = p2;
    };

    function find(c) {
        if (c != unionArr[c]) unionArr[c] = find(unionArr[c]);
        return unionArr[c];
    };
};