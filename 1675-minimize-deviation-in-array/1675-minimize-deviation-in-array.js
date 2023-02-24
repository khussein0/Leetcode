/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    let maxHeap = new MaxPriorityQueue({priority: n => n});
    
    for(let num of nums){
        if(num % 2) num *= 2;
        maxHeap.enqueue(num);
    };
    
    let res = maxHeap.front().element - maxHeap.back().element;
    
    while(maxHeap.front().element % 2 === 0){
        maxHeap.enqueue(maxHeap.dequeue().element / 2);
        res = Math.min(res, maxHeap.front().element - maxHeap.back().element);
    };
    
    return res;
};