/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let start = head, cur = head, i = 1;
    
    while(i < left){
        start = cur;
        cur = start.next;
        i++;
    };
    
    let prev = null, tail = cur;
    
    while(i >= left && i <= right){
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        i++
    };
    
    start.next = prev;
    tail.next = cur;
    
    return left > 1 ? head : prev;
};