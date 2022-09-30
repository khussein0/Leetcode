/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let slow = null, fast = head;
    while(fast && fast.next){
        if(fast.val === fast.next.val){
            while(fast && fast.next && fast.val === fast.next.val) fast = fast.next;
            fast = fast.next;
        
            if(!slow) head = fast;
            else slow.next = fast;
        }else{
            slow = fast;
            fast = fast.next;
        };
    };
    return head;
};