/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const pq = new MinPriorityQueue({priority: (e) => e}), merge = nums1.map((nums1Val, i) => [nums2[i], nums1Val]);
    let res = 0, total = 0;
    
    merge.sort((a,b) => b[0] - a[0]);
    
    for(const [max, val] of merge){
        if(pq.size() === k) total -= pq.dequeue().element;
        total += val;
        pq.enqueue(val);
        if(pq.size() === k) res = Math.max(res, total * max);
    };
    
    return res;
};