/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const arr = [];
    let max = 0;
    
    while(head){
        arr.push(head.val);
        head = head.next;
    };
    
    for(let i = 0; i < arr.length; i++) max = Math.max(max, (arr[i] + arr[arr.length-1-i]));
    
    return max;
};