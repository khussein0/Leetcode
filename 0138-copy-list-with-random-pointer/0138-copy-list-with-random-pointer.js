/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    
    const copyMap = new Map();
    let old = head;
    
    while(old){
        copyMap.set(old, new Node(old.val));
        old = old.next;
    };
    
    old = head;
    
    while(old){
        copyMap.get(old).next = copyMap.get(old.next) || null;
        copyMap.get(old).random = copyMap.get(old.random) || null;
        old = old.next;
    };
    
    return copyMap.get(head);
};