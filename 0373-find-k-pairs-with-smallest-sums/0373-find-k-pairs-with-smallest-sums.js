/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const minHeap = new MinPriorityQueue({ priority: x => x[0] }), res = [];
    
    for(let i = 0; i < nums1.length; i++) minHeap.enqueue([nums1[i] + nums2[0], i, 0]);
    
    while(!minHeap.isEmpty()){
        const [sum, idx1, idx2] = minHeap.dequeue().element;
        res.push([nums1[idx1], nums2[idx2]]);
        if(res.length === k) return res;
        if(idx2 < nums2.length - 1) minHeap.enqueue([nums1[idx1] + nums2[idx2+1], idx1, idx2+1]);
    };
    
    return res;
};