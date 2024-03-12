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
var removeZeroSumSublists = function(head) {
    let newList = new ListNode(0);
    newList.next = head;
    
    let cur = newList, prefixSum = new Map(), curSum = 0;
    
    while(cur){
        curSum += cur.val;
        prefixSum.set(curSum, cur);
        cur = cur.next;
    }
    
    cur = newList;
    curSum = 0;
    
    while(cur){
        curSum += cur.val;
        cur.next = prefixSum.get(curSum).next;
        cur = cur.next;
    }
    
    return newList.next;
};