/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let pq = new MaxPriorityQueue({priority: x => x}), res = 0;
    
    for(let pile of piles) pq.enqueue(pile);
    
    while(k--){
        let cur = pq.dequeue().element;
        pq.enqueue(cur - Math.floor(cur / 2));
    };
    
    while(pq.size()) res += pq.dequeue().element;
    return res;
};
