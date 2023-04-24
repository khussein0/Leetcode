/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap = new MaxPriorityQueue();
    
    for(let s of stones) heap.enqueue(s);
    
    while(heap.size() > 1){
        let x = heap.dequeue().element, y = heap.dequeue().element;
        if(x !== y) heap.enqueue(x - y);
    };
    
    return heap.size() === 0 ? 0 : heap.front().element;
};