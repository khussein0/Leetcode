/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    let order = Array.from({length: n}, (_,i) => i);
    order.sort((a,b) => efficiency[b] - efficiency[a]);
    let pq = new MinPriorityQueue(), speedTotal = 0n, maxPer = 0n;
    
    for(let eng of order){
        pq.enqueue(speed[eng]);
        if(pq.size() <= k) speedTotal += BigInt(speed[eng]);
        else speedTotal += BigInt(speed[eng] - pq.dequeue().element);
        let res = speedTotal * BigInt(efficiency[eng]);
        if(res > maxPer) maxPer = res;
    };
    
    return maxPer % 1000000007n;
};