/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    tasks = tasks.map(([e,p], i) => [e,p,i]).sort((a,b) => b[0] - a[0]);
    let pq = new MinPriorityQueue({ priority: ([e,p,i]) => p + 10**(-7)*(i+1) }),
        time = tasks[tasks.length - 1][0], res = [];
    
    while(tasks.length || pq.size()){
        while(tasks.length && time >= tasks[tasks.length - 1][0]) pq.enqueue(tasks.pop());
        if(pq.size()){
            let [e,p,i] = pq.dequeue().element;
            time += Number(p);
            res.push(i);
        }else if(tasks.length) time = tasks[tasks.length - 1][0];
    };
    
    return res;
};