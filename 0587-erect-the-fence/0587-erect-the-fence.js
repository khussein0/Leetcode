/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    trees.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let low = [], high = [];
    
    for(let tree of trees){
        while(low.length >= 2 && cmp(low[low.length - 2], low[low.length - 1], tree) > 0) low.pop();
        while(high.length >= 2 && cmp(high[high.length - 2], high[high.length - 1], tree) < 0) high.pop();
        low.push(tree);
        high.push(tree);
    };
    
    return [...new Set(low.concat(high))];
};
    
function cmp(p1, p2, p3){
    let [x1, y1] = p1, [x2, y2] = p2, [x3, y3] = p3;
    return (y3 - y2) * (x2 - x1) - (y2 - y1) * (x3 - x2);
};