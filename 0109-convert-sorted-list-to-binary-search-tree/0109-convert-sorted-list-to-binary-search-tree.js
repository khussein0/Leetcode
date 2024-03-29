/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let cur = head, count = 0;
    
    while(cur) {
        cur = cur.next;
        count++;
    };
    
    function bst(l, r){
        if(r < l) return null;
        let mid = l + r >> 1, node = new TreeNode();
        node.left = bst(l, mid - 1);
        node.val = cur.val;
        cur = cur.next;
        node.right = bst(mid + 1, r);
        return node;
    };
    
    cur = head;
    return bst(1, count);
};