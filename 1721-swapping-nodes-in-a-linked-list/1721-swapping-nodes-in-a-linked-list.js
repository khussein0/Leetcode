/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let a = head, b = head, n, tmp;
    
    for(let i = 1; i < k; i++) a = a.next;
    n = a;
    a = a.next;
    
    while(a){
        a = a.next;
        b = b.next;
    };
    
    tmp = n.val;
    n.val = b.val;
    b.val = tmp;
    
    return head;
};