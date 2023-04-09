/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    if(!edges.length) return 1;
    let graph = {}, res = new Array(colors.length).fill(0), stack = new Array(), a = 'a'.charCodeAt(0);
    
    for(let [u, v] of edges){
        graph[u] ? graph[u].push(v) : graph[u] = [v];
        res[v] ? res[v]++ : res[v] = 1;
    };
    
    for(let i of Object.keys(graph)){
        if(!res[i]) stack.push(i);
    };
    
    const count = Array.from({ length: colors.length }, () => Array(26).fill(0));
    
    while(stack.length){
        let node = stack.pop();
        count[node][colors[node].charCodeAt(0) - a]++;
        if(!graph[node]) continue;
        for(let n of graph[node]){
            count[n] = merge(count[node], count[n]);
            res[n]--;
            if(!res[n]) stack.push(n);
        };
    };
    
    return res.every(r => r === 0) ? getMax(count) : - 1;
};

function merge(arr1, arr2){
    const mergeList = [];
    for(let i = 0; i < arr1.length; i++) mergeList.push(Math.max(arr1[i], arr2[i]));
    return mergeList;
};

function getMax(count){
    let max = 0;
    for(let arr of count) max = Math.max(max, Math.max(...arr));
    return max;
};