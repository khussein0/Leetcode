/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const diff = new Map(), stack = [];
    
    for(let i = 0; i < graph.length; i++){
        if(diff.has(i)) continue;
        diff.set(i, true);
        stack.push(i);
        
        while(stack.length){
            let cur = stack.pop();
            for(let n of graph[cur]){
                if(!diff.has(n)){
                    diff.set(n, !diff.get(cur));
                    stack.push(n);
                    continue;
                };
                if(diff.get(n) === diff.get(cur)) return false;
            };
        };
    };
    
    return true;
};