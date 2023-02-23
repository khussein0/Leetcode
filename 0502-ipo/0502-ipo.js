/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let minHeap = new MinPriorityQueue({priority: p => p[1]}),
        maxHeap = new MaxPriorityQueue({priority: p => p[0]});
    
    for(let i = 0; i < profits.length; i++) maxHeap.enqueue([profits[i], capital[i]]);
    
    while(k && maxHeap.size()){
        let [v, l] = maxHeap.dequeue().element;
        if(l <= w){
            k--;
            w += v;
        }else minHeap.enqueue([v, l]);
        
        while(minHeap.size() && minHeap.front().priority <= w){
            let [v, l] = minHeap.dequeue().element;
            maxHeap.enqueue([v, l]);
        };
    };
    
    return w;
};