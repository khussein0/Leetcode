/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let q = new MinPriorityQueue({ priority: x => x.val });
    
    for(let list of lists){
        if(list) q.enqueue(list);
    };
    
    let res = new ListNode(), head = res;
    
    while(!q.isEmpty()){
        let { val, next } = q.dequeue().element;
        res.next = new ListNode(val);
        res = res.next;
        if(next) q.enqueue(next);
    };
    
    return head.next;
};