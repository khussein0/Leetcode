/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const order = [], q = [], graph = new Map(), arr = Array(numCourses).fill(0);
    
    for(const [a, b] of prerequisites){
        if(graph.has(b)) graph.get(b).push(a);
        else graph.set(b, [a]);
        arr[a]++;
    };
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0) q.push(i);
    };
    
    while(q.length){
        const b = q.pop();
        if(graph.has(b)){
            for(const a of graph.get(b)){
                arr[a]--;
                if(arr[a] === 0) q.push(a);
            };
        };
        order.push(b);
    };
    
    return numCourses === order.length;
};