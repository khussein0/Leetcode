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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const res = new Array(k).fill(null);
    let root = head, len = 0;
    
    while(root){
        len++;
        root = root.next;
    };
    
    let size = Math.floor(len / k), rem = len % k;
    
    root = head;
    let prev = null;
    
    for(let i = 0; root && i < k; i++, rem--){
        res[i] = root;
        for(let j = 0; j < size + (rem > 0 ? 1 : 0); j++){
            prev = root;
            root = root.next;
        };
        
        if(prev) prev.next = null;
    };
    
    return res;
};