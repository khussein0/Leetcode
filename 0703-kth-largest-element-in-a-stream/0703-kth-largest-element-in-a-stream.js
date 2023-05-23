/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.pq = new MinPriorityQueue();
    this.k = k;
    nums.forEach(n => this.pq.enqueue(n));
    while(this.pq.size() > k) this.pq.dequeue().element;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.pq.enqueue(val);
    if(this.pq.size() > this.k) this.pq.dequeue().element;
    return this.pq.front().element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */