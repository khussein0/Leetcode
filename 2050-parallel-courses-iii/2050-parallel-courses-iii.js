/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    let graph = {}, degree = Array(n+1).fill(0);
    
    for(let relation of relations){
        if(!graph[relation[0]]) graph[relation[0]] = [];
        graph[relation[0]].push(relation[1]);
        degree[relation[1]]++;
    };
    
    let dist = [0].concat(time), q = [];
    
    for(let i = 1; i <= n; i++){
        if(degree[i] === 0) q.push(i);
    };
    
    while(q.length){
        let course = q.shift();
        if(graph[course]){
            for(let next of graph[course]){
                dist[next] = Math.max(dist[next], dist[course] + time[next - 1]);
                degree[next]--;
                if(degree[next] === 0) q.push(next);
            };
        };
    };
    
    return Math.max(...dist);
};