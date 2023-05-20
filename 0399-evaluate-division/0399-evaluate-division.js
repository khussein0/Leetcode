/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adjList = new Map(), res = [];
    
    for(let i = 0; i < equations.length; i++){
        adjList.set(equations[i][0], []);
        adjList.set(equations[i][1], []);
    };
    
    for(let i = 0; i < equations.length; i++){
        const [u,v] = [equations[i][0], equations[i][1]], w = values[i];
        adjList.get(u).push([v, w]);
        adjList.get(v).push([u, 1/w]);
    };
    
    for(let i = 0; i < queries.length; i++){
        const [s,d] = [queries[i][0], queries[i][1]], visited = new Set(), val = dfs(adjList, s, s, d, 1, visited);
        
        if(val === false) res.push(-1);
        else res.push(val);
    };
    
    return res;
};

function dfs(adj, s, c, d, q, v){
    if(!adj.has(s) || !adj.has(d)) return -1;
    if(s === d) return 1;
    if(c === d) return q;
    v.add(c);
    const n = adj.get(c);
    
    for(let i = 0; i < n.length; i++){
        if(v.has(n[i][0])) continue;
        const val = dfs(adj, s, n[i][0], d, q * n[i][1], v);
        if(val !== false) return val;
    };
    
    return false;
};