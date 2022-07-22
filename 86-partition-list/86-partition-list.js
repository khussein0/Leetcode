/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let forward = new ListNode(0), backward = new ListNode(0),
        front = forward, back = backward, curr = head;
    while (curr) {
        if (curr.val < x)front.next = curr, front = curr;
        else back.next = curr, back = curr;
        curr = curr.next;
    }
    front.next = backward.next, back.next = null;
    return forward.next;
};