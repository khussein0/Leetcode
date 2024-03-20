/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let start = list1;
    for(let i = 0; i < a-1; i++) start = start.next;
    
    let end = start.next;
    for(let i = 0; i < b-a+1; i++) end = end.next;
    
    start.next = list2;
    
    while(list2.next) list2 = list2.next;
    list2.next = end;
    
    return list1;
};